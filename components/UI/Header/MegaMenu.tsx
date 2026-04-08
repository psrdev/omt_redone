"use client";

export default function MegaMenu({ item, activeTab, setActiveTab }: any) {
  return (
    <div className="mega-menu d-none d-lg-block">
      {item.type === "tabs" && (
        <div className="row g-0">
          <div className="col-md-3 mega-left">
            {item.tabs.map((tab: any, index: number) => (
              <div
                key={index}
                className={`mega-tab ${activeTab === index ? "active" : ""}`}
                onMouseEnter={() => setActiveTab(index)}
              >
                {tab.label}
              </div>
            ))}
          </div>

          <div className="col-md-9 mega-right">
            {item?.tabs[activeTab].links.map((link: any, j: number) => (
              <a key={j} href={link.href} className="mega-link">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}

      {item.type === "simple" && (
        <div className="row g-0">
          {item.sections?.map((section: any, j: number) => (
            <div key={j} className="col-md-4 mega-simple">
              <h6 className="mega-title">{section.title}</h6>
              {section.links.map((link: any, k: number) => (
                <a key={k} href={link.href} className="mega-link">
                  {link.label}
                </a>
              ))}
            </div>
          ))}
          <div className="col-md-8 mega-image">
            <img
              src={item?.img}
              alt="Menu Visual"
              className="img-fluid h-25 w-100 object-fit-cover"
            />
          </div>
        </div>
      )}
    </div>
  );
}
