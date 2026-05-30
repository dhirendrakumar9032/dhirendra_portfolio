import { useContext } from "react";
import { Link } from "react-scroll";
import { NavigationContext } from "../../App";
import "./index.scss";
import { BriefcaseBusiness, CircleUserRound, Home, Mail, Sparkles } from "lucide-react";

type NavItem = {
  id: string;
  label: string;
  icon: JSX.Element;
};

const Navigation = () => {
  const { isNavVisible } = useContext(NavigationContext);

  const navItems: NavItem[] = [
    {
      id: "home",
      label: "Home",
      icon: <Home />,
    },
    {
      id: "about",
      label: "About",
      icon: <CircleUserRound />,
    },
    {
      id: "skills",
      label: "Skills",
      icon: <Sparkles />,
    },
    {
      id: "projects",
      label: "Projects",
      icon: <BriefcaseBusiness />,
    },
    {
      id: "contact",
      label: "Contact",
      icon: <Mail />,
    },
  ];

  return (
    <div
      className={` ${
        isNavVisible ? "navigation-container" : "navigation-container-hide"
      }`}
    >
      <div className="navigation-bar">
        {navItems.map((item) => (
          <Link
            key={item.id}
            className="nav-item"
            to={item.id}
            smooth={true}
            duration={500}
            title={item.label}
            aria-label={`Go to ${item.label}`}
          >
            {item.icon}
            <span className="nav-tooltip">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
