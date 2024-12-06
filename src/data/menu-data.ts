
interface MenuItem {
    id: number;
    label: string;
    link: string;
    lastItem?: string;
    hasDropdown?: boolean;
    subMenu?: MenuItem[];
  }
   
  const navMenuData:MenuItem[] = [
    {
      id: 1,
      label: "Home",
      link: "/",
      hasDropdown: true,
      subMenu: [
        { id: 7, label: "Home 1", link: "/" },
        { id: 8, label: "Home 2", link: "/home-two" },
        
      ],
    },
    {
      id: 2,
      label: "Jobs",
      link: "#",
      hasDropdown: true,
      subMenu: [
        { id: 9, label: "Job Grid", link: "/job-grid" },
        { id: 10, label: "Job Sidebar", link: "/job-sidebar" },
        { id: 11, label: "Job Grid 2 Col", link: "/job-grid-2-col" },
        { id: 12, label: "Job Grid Sidebar", link: "/job-grid-sidebar" },
        { id: 13, label: "Job Grid Map", link: "/job-grid-map" },
        { id: 14, label: "Job Details", link: "/job-details" },
      ],
    },
   
    {
      id: 3,
      label: "Candidates",
      link: "#",
      hasDropdown: true,
      subMenu: [
        { id: 15, label: "Candidate", link: "/candidate-grid" },
        { id: 16, label: "Candidate Details", link: "/candidate-details" },
        { id: 30, label: "Candidate Profile", link: "/profile" },
      ],
    },
    {
      id: 4,
      label: "Employers",
      link: "#",
      hasDropdown: true,
      subMenu: [
        { id: 17, label: "Employer List", link: "/employer-list" },
        { id: 18, label: "Employer Details", link: "/employer-details" },
      ],
    },
    {
      id: 5,
      label: "Pages",
      link: "#",
      hasDropdown: true,
      subMenu: [
        { id: 19, label: "About", link: "/about" },
        { id: 20, label: "Faq", link: "/faq" },
        { id: 21, label: "Pricing", link: "/pricing" },
        { id: 22, label: "Contact", link: "/contact" },
        { id: 23, label: "Blog Grid", link: "/blog-grid" },
        { id: 24, label: "Blog List", link: "/blog-standard" },
        { id: 25, label: "Blog Details", link: "/blog-details" },
        { id: 26, label: "Login", link: "/login" },
        { id: 27, label: "Register", link: "/register" },
        { id: 28, label: "Privacy Policy", link: "/privacy-policy" },
      ],
    },



    
  
  ];
  
  export default navMenuData;
  