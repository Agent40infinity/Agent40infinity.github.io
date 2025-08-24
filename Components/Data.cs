using Newtonsoft.Json;
using System.Text.Json;

namespace aiden.fyi.Components
{
    public static class Data
    {
        public static bool isLocal;

        public static Dictionary<string, List<Project>> Projects = new Dictionary<string, List<Project>>();
        public static Dictionary<string, JsonElement> Resume = new Dictionary<string, JsonElement>();

        public static List<SkillItem>? Languages => JsonConvert.DeserializeObject<List<SkillItem>>(Resume["language"].ToString());
        public static List<SkillItem>? Legend => JsonConvert.DeserializeObject<List<SkillItem>>(Resume["legend"].ToString());
        public static List<SoftwareCategory>? Software => JsonConvert.DeserializeObject<List<SoftwareCategory>>(Resume["software"].ToString());
        public static List<ExperienceCategory>? Experience => JsonConvert.DeserializeObject<List<ExperienceCategory>>(Resume["experience"].ToString());
        public static List<Study>? Education => JsonConvert.DeserializeObject<List<Study>>(Resume["education"].ToString());
    }
}