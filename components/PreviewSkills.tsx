"use client";
import { usePreview } from "@/lib/sanity.preview";
import Skill from "./Skills";

import Technologies from "./Skills";
type Props = {
  skill: string;
};
function PreviewSkills({ skill }: Props) {
  const skills = usePreview(null, skill);

  return <Skill skill={skills} />;
}

export default PreviewSkills;
