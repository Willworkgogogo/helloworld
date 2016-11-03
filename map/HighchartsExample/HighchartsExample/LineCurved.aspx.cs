using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Text;

namespace HighchartsExample
{
    public partial class LineCurved : System.Web.UI.Page
    {
        public string title = "";//标题
        public string subtitle = "";//副标题
        public string categories = "";//x轴分组Lable
        public string yTitle = "";//Y轴标题
        public string data = "";//数据源
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                title = "曲线";
                subtitle = "与折线的区别：将chart的type属性值改为spline";
                categories = "'周一','周二','周三','周四','周五','周六','周日'";
                yTitle = "Y轴标题";

                List<Dictionary<string, string>> lists = new List<Dictionary<string, string>>();
                Random random = new Random();
                for (int i = 0; i < 3; i++)
                {
                    Dictionary<string, string> yDic = new Dictionary<string, string>();
                    yDic.Add("name", (i + 1).ToString());

                    string str = "[";
                    for (int x = 0; x < 7; x++)
                        str += string.Format("{0},", random.Next(100));
                    str = str.TrimEnd(',');
                    str += "]";
                    yDic.Add("data", str);
                    lists.Add(yDic);
                }

                foreach (Dictionary<string, string> dic in lists)
                {
                    data += "{";
                    foreach (var item in dic)
                        data += string.Format("{0}: {1},", item.Key, item.Value);
                    data = data.TrimEnd(',');
                    data += "},";
                }
                data = data.TrimEnd(',');
            }
        }
    }
}