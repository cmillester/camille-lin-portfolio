import { resumeContent } from "../../lib/content/resume";
import { site } from "../../lib/site";

export const resumeData = {
  ...resumeContent,
  email: site.email,
  linkedin: site.linkedin,
};
