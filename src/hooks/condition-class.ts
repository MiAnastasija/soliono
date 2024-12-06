export const getTagClass = (tag: string) => {
    switch (tag) {
      case "urgent":
        return "tag-urgent";
      case "featured":
        return "tag-fea";
      case "full time":
        return "tag-normal";
      case "ads":
        return "adds-style";
      case "closed":
        return "close-style";
      default:
        return "";
    }
  };