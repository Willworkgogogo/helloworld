using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace HighchartsExample
{
    public partial class Pie : System.Web.UI.Page
    {
        public string title = "";//标题
        public string name = "";
        public string data = "";//数据源
        protected void Page_Load(object sender, EventArgs e)
        {
            title = "饼图";
            name = "升学率";

            Random random = new Random();
            for (int i = 0; i < 5; i++)
            {
                data += "{";
                data += string.Format("name : '{0}', y:{1}, color:colors[{2}],", i, random.Next(20), i);
                data += "},";
            }
            data = data.TrimEnd(',');
        }
    }
}