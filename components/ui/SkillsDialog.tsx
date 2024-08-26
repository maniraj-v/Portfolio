import { allSkillsList } from "@/app/_constants/skills";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { IoMdOpen } from "react-icons/io";

function SkillsDialog() {
  return (
    <Dialog>
      <DialogTrigger>
        <span
          role="button"
          aria-description="open skills dialog"
          aria-haspopup
          className="text-cyan-200 text-sm flex gap-2 items-center"
        >
          See my full arsenal <IoMdOpen />
        </span>
      </DialogTrigger>
      <DialogContent className="bg-slate-800 text-gray-200 rounded-sm overflow-hidden">
        <DialogHeader>
          <DialogTitle>Skill List</DialogTitle>
        </DialogHeader>
        <ul className="max-h-[80vh] overflow-y-auto space-y-4">
          {Object.entries(allSkillsList).map(([key, skills]) => {
            return (
              <li key={key} className="flex flex-col gap-1">
                <p className="font-semibold text-gray-400">{key}</p>
                <div className="border-t border-cyan-200 border-opacity-50 max-w-[90%] mb-2" />
                <ul className="grid grid-cols-2 gap-x-8 gap-y-4">
                  {skills.map(({ name, icon }) => {
                    return (
                      <li className="flex items-center gap-2" key={name}>
                        <span className="text-cyan-200 text-2xl">
                          {icon({})}
                        </span>
                        <span className="text-white text-sm">{name}</span>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </DialogContent>
    </Dialog>
  );
}
export default SkillsDialog;
