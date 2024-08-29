import { simpleOpacity, stagger } from "@/app/_constants/animations";
import { ExperiencesList } from "@/app/_constants/experience";
import { Motion } from "@/components/Animation/Motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { BiRightArrow } from "react-icons/bi";

const ExperienceTabs = () => {
  return (
    <Tabs defaultValue={ExperiencesList[0].name}>
      <TabsList className="w-full bg-gray-900 bg-opacity-80 h-auto">
        {ExperiencesList.map(({ name, longName, logo }) => {
          return (
            <TabsTrigger
              value={name}
              key={name}
              className="flex-1 bg-gray-900 bg-opacity-80 text-gray-100 data-[state=active]:bg-white rounded-sm"
            >
              <Image
                src={logo.dark.replace("/public", "")}
                alt={name}
                width={80}
                height={20}
                className="h-[28px] aspect-auto"
                title={longName}
              />
            </TabsTrigger>
          );
        })}
      </TabsList>
      {ExperiencesList.map((item) => {
        const {
          name,
          longName,
          subDetail,
          position,
          url,
          duration,
          logo,
          roles,
        } = item;
        return (
          <TabsContent value={name} key={longName}>
            <div className="mb-6">
              <p className="text-gray-400 text-lg font-bold">{position}</p>
              <p>
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg font-semibold"
                >
                  #{name}{" "}
                </a>
                <span className="text-gray-400 text-xs">{subDetail}</span>
              </p>
              <p className="text-sm">{duration}</p>
            </div>
            <Motion
              as="ul"
              className="text-sm text-gray-400 flex flex-col gap-2"
              initial="initial"
              animate="animate"
              variants={stagger}
            >
              {roles?.map((item, index) => {
                return (
                  <Motion
                    as="li"
                    key={index}
                    className="flex gap-2"
                    variants={simpleOpacity}
                  >
                    <span className="self-start mt-[0.5px] text-cyan-200">
                      <BiRightArrow />
                    </span>
                    <span>{item}</span>
                  </Motion>
                );
              })}
            </Motion>
          </TabsContent>
        );
      })}
    </Tabs>
  );
};
export default ExperienceTabs;
