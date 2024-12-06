import { IeducationData } from "@/interFace/interFace";
export const getSchoolName = (educationItem: IeducationData) => {
    const schoolTypes: Array<keyof IeducationData> = ["businessSchool", "lawSchool", "university", "conservatory"];
    const validSchool = schoolTypes.find((type) => educationItem?.[type]);
    return validSchool ? educationItem?.[validSchool] : null;
  };
  
  