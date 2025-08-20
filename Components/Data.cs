using System.Collections.Generic;

namespace aiden.fyi.Components
{
    public static class Data
    {
        public static Dictionary<string, List<Project>> Projects = new Dictionary<string, List<Project>>();

        public static List<SkillItem> languages = new List<SkillItem>();
        public static List<SkillItem> legend = new List<SkillItem>();
        public static List<Components.SoftwareCategory> software = new List<Components.SoftwareCategory>();
        public static List<Components.ExperienceCategory> experience = new List<Components.ExperienceCategory>();
        public static List<Study> education = new List<Study>();

        public static Dictionary<string, object> Resume
        {
            set
            {
                languages = (List<SkillItem>)value["language"];
                legend = (List<SkillItem>)value["legend"];
                software = (List<Components.SoftwareCategory>)value["software"];
                experience = (List<Components.ExperienceCategory>)value["experience"];
                education = (List<Study>)value["education"];
            }

        }
    }
}