using System.Collections.Generic;

namespace aiden.fyi.Components
{
    public static class Data
    {
        public static Dictionary<string, List<Project>> Projects = new Dictionary<string, List<Project>>();
        public static Dictionary<string, object> Resume = new Dictionary<string, object>();

        public static List<SkillItem> Languages => (List<SkillItem>)Resume["language"];
        public static List<SkillItem> Legend => (List<SkillItem>)Resume["legend"];
        public static List<SoftwareCategory> Software => (List<SoftwareCategory>)Resume["software"];
        public static List<ExperienceCategory> Experience => (List<ExperienceCategory>)Resume["experience"];
        public static List<Study> Education => (List<Study>)Resume["education"];
    }
}