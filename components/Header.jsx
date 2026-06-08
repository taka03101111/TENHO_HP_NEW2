// TENHO HP — Header
// Sticky nav with scroll-spy. Active section gets a pale blue underline.

const NAV_ITEMS = [
  { id: 'top',     num: '01', label: 'TOP' },
  { id: 'what',    num: '02', label: 'What' },
  { id: 'more',    num: '03', label: 'Case' },
  { id: 'contact', num: '04', label: 'Contact' },
  { id: 'company', num: '05', label: 'Company' },
];

function Header({ activeId, scrolled }) {
  const handleClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 12;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className={"site-header " + (scrolled ? 'scrolled' : '')}>
      <div className="site-header-inner">
        <a
          className="site-logo"
          href="#top"
          onClick={(e) => handleClick(e, 'top')}
          aria-label="TENHO"
        >
          <img src={(window.__resources && window.__resources.logoBlack) || "assets/TENHO-logo-black.png"} alt="TENHO" />
        </a>
        <nav className="site-nav" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={'#' + item.id}
              className={activeId === item.id ? 'is-active' : ''}
              onClick={(e) => handleClick(e, item.id)}
              data-comment-anchor={'nav-' + item.id}
            >
              <span className="nav-num">{item.num}</span>
              {item.label}
              <span className="nav-underline" aria-hidden="true"></span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

window.Header = Header;
window.NAV_ITEMS = NAV_ITEMS;
