"use client";

export default function MobileMenu({ item, index }: any) {
  return (
    <div className="d-lg-none">
      <button
        className="nav-link d-flex justify-content-between align-items-center w-100 border-0 bg-transparent"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target={`#mobileMenu-${index}`}
      >
        {item.label} <i className="fa-solid fa-chevron-down nav-arrow"></i>
      </button>

      <div id={`mobileMenu-${index}`} className="collapse">
        <div className="mobile-menu">
          {item.type === "tabs" &&
            item.tabs.map((tab: any, t: number) => (
              <div key={t} className="mobile-section">
                <div className="mobile-title">{tab.label}</div>
                {tab.links.map((link: any, l: number) => (
                  <a key={l} href={link.href} className="mobile-link">
                    {link.label}
                  </a>
                ))}
              </div>
            ))}

          {item.type === "simple" &&
            item.sections?.map((section: any, s: number) => (
              <div key={s} className="mobile-section">
                <div className="mobile-title">{section.title}</div>
                {section.links.map((link: any, l: number) => (
                  <a key={l} href={link.href} className="mobile-link">
                    {link.label}
                  </a>
                ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
