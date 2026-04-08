"use client";
import Image from "next/image";

export default function MegaMenu({ item, activeTab, setActiveTab }: any) {
  return (
    <div className="mega-menu d-none d-lg-flex">
      {/* Tabs Layout */}
      {item.type === "tabs" && (
        <div className="d-flex w-100">
          <div className="mega-left">
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

          <div className="mega-right">
            {item.tabs[activeTab].links.map((link: any, j: number) => (
              <a key={j} href={link.href} className="mega-link">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Simple Layout */}
      {item.type === "simple" && (
        <div className="d-flex w-100">
          {item.sections?.map((section: any, j: number) => (
            <div key={j} className="mega-simple">
              <h6 className="mega-title">{section.title}</h6>
              {section.links.map((link: any, k: number) => (
                <a key={k} href={link.href} className="mega-link">
                  {link.label}
                </a>
              ))}
            </div>
          ))}
          {item.img && (
            <div className="mega-right">
              <Image
                src={item.img}
                alt="Menu Visual"
                className="img-fluid"
                width={400}
                height={300}
              />
            </div>
          )}
        </div>
      )}

      {/* Tabs with Image */}
      {item.type === "tabs-image" && (
        <div className="d-flex w-100">
          <div className="mega-left">
            {item.tabs.map((tab: any, index: number) => (
              <div
                key={index}
                className={`mega-tab ${activeTab === index ? "active" : ""}`}
                onMouseEnter={() => setActiveTab(index)}
              >
                <a href={tab.link}>{tab.label}</a>
              </div>
            ))}
          </div>

          <div className="mega-right">
            <Image
              src={item.tabs[activeTab]?.img}
              alt={item.tabs[activeTab]?.label}
              className="img-fluid"
              width={400}
              height={500}
            />
          </div>
        </div>
      )}
    </div>
  );
}
