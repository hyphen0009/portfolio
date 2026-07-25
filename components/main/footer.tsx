import Link from "next/link";

import { FOOTER_DATA } from "@/constants";

export const Footer = () => {
  const mainColumns = FOOTER_DATA.filter((column) => column.title !== "Contact");
  const contactColumn = FOOTER_DATA.find((column) => column.title === "Contact");

  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg px-3 py-5 sm:px-5 sm:py-6 lg:px-8">
      <div className="w-full max-w-5xl flex flex-col items-center justify-center m-auto">
        <div className="w-full grid grid-cols-2 gap-4 sm:gap-6">
          {mainColumns.map((column) => (
            <div
              key={column.title}
              className="h-auto flex flex-col items-center justify-start"
            >
              <h3 className="font-bold text-[14px] sm:text-[15px] text-center">
                {column.title}
              </h3>
              {column.data.map(({ icon: Icon, name, link }) => (
                <Link
                  key={`${column.title}-${name}`}
                  href={link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex flex-row items-center mt-2 text-gray-300 hover:text-white transition"
                >
                  {Icon && <Icon className="h-3.5 w-3.5 shrink-0" />}
                  <span className="text-[13px] sm:text-[14px] ml-[6px]">{name}</span>
                </Link>
              ))}
            </div>
          ))}
        </div>

        {contactColumn && (
          <div className="mt-5 flex flex-col items-center">
            {contactColumn.data.map(({ icon: Icon, name, link }) => (
              <Link
                key={`${contactColumn.title}-${name}`}
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                className="flex flex-row items-center text-gray-300 hover:text-white transition"
              >
                {Icon && <Icon className="h-3.5 w-3.5 shrink-0" />}
                <span className="text-[13px] sm:text-[14px] ml-[6px]">{name}</span>
              </Link>
            ))}
          </div>
        )}

        <div className="mt-5 text-[12px] sm:text-[13px] text-center text-gray-400">
          Mohammad Zaid
        </div>
      </div>
    </div>
  );
};
