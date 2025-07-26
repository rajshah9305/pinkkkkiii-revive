import { useEffect, useState } from 'react';

interface Chapter {
  id: string;
  title: string;
}

interface ChapterNavigationProps {
  chapters: Chapter[];
}

const ChapterNavigation = ({ chapters }: ChapterNavigationProps) => {
  const [activeChapter, setActiveChapter] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const navOffset = window.innerHeight / 3;
      let currentChapterId = '';

      chapters.forEach(chapter => {
        const element = document.getElementById(chapter.id);
        if (!element) return;

        const chapterTop = element.offsetTop;
        const chapterHeight = element.offsetHeight;

        if (window.scrollY >= chapterTop - navOffset &&
            window.scrollY < chapterTop + chapterHeight - navOffset) {
          currentChapterId = chapter.id;
        }
      });

      setActiveChapter(currentChapterId);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [chapters]);

  const scrollToChapter = (chapterId: string) => {
    const element = document.getElementById(chapterId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="chapter-nav">
        {chapters.map((chapter) => (
          <button
            key={chapter.id}
            className={`chapter-dot ${activeChapter === chapter.id ? 'active' : ''}`}
            onClick={() => scrollToChapter(chapter.id)}
            title={chapter.title}
            aria-label={`Go to ${chapter.title}`}
          />
        ))}
      </nav>

      {/* Mobile Navigation */}
      <div className="mobile-nav md:hidden">
        <div className="mobile-nav-inner">
          {chapters.map((chapter) => (
            <button
              key={`mobile-${chapter.id}`}
              className={`chapter-dot ${activeChapter === chapter.id ? 'active' : ''}`}
              onClick={() => scrollToChapter(chapter.id)}
              title={chapter.title}
              aria-label={`Go to ${chapter.title}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ChapterNavigation;