import { ExperiencesList } from "@/app/_constants/experience";
import { projects } from "@/app/_constants/projects";
import ScaleUpImage from "@/components/ui/ScaleUpImage";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { BiRightArrow } from "react-icons/bi";

const ProjectList = () => {
  return (
    <ul className="text-sm text-gray-400 flex flex-col gap-6">
      {projects.map(({ title, content, imageSrc, liveUrl }, index) => {
        const isEven = index % 2 === 0;
        return (
          <li
            key={index}
            className={
              "bg-[#252525] grid lg:grid-cols-2 border border-gray-600 rounded-xl overflow-hidden min-h-48"
            }
          >
            <ScaleUpImage
              src={imageSrc.replace("/public", "")}
              alt={title}
              width={1913}
              height={874}
            />
            {/* Project Description */}
            <div
              className={cn(
                "py-4 px-4 order-last",
                isEven ? "lg:order-first" : ""
              )}
            >
              <p className="font-semibold flex gap-2 items-center">
                <span className="text-base">
                  #{`${index + 1}`.padStart(2, "0")}
                </span>
                <span className="font-semibold text-lg text-white uppercase">
                  {title}
                </span>
              </p>
              {/* Divider */}
              <div className="h-[0.5px] w-full bg-gray-200 opacity-50 mt-1 mb-2" />
              <p className="mb-3">{content}</p>
              {liveUrl && (
                <div className="w-full flex justify-center">
                  <button className="px-4 py-2 border border-gray-600 border-opacity-40 rounded-sm hover:bg-gray-800 hover:bg-opacity-50">
                    <a
                      href={liveUrl}
                      className="text-white"
                      target="_blank"
                      rel="noopener"
                    >
                      View Project
                    </a>
                  </button>
                </div>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
};
export default ProjectList;
