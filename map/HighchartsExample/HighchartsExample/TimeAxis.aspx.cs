using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace HighchartsExample
{
    public partial class TimeAxis : System.Web.UI.Page
    {
        public string title = "";//标题
        public string subTitle = "";//副标题
        public string yTitle = "";//Y轴标题
        public string name = "";
        public string data = "";//数据源
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                title = "时间轴";
                yTitle = "Y轴标题";
                name = "";
                Random random = new Random();
                for (int i = 0; i < 100; i++)
                    data += string.Format("{0},", random.Next(100));

                data = data.TrimEnd(',');
            }
        }
    }
}