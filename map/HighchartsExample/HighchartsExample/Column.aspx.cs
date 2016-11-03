using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Text;

namespace HighchartsExample
{
    public partial class Column : System.Web.UI.Page
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
                title = "单柱";
                //subtitle = "点击各列可查看内部数据分布.";
                categories = "'周一','周二','周三','周四','周五','周六','周日'";
                yTitle = "Y轴标题";

                List<Dictionary<string, int>> lists = new List<Dictionary<string, int>>();
                Random random = new Random();
                for (int i = 0; i < 7; i++)
                {
                    Dictionary<string, int> yDic = new Dictionary<string, int>();
                    yDic.Add("y", random.Next(100));
                    yDic.Add("color", i);
                    lists.Add(yDic);
                }

                foreach (Dictionary<string, int> dic in lists)
                {
                    data += "{";
                    foreach (var item in dic)
                    {
                        if (item.Key == "color")
                            data +=string.Format("{0}: colors[{1}],", item.Key, item.Value);
                        else
                            data += string.Format("{0}: {1},", item.Key, item.Value);
                    }
                    data.TrimEnd(new char[',']);
                    data +="},";
                }
                data.TrimEnd(new char[',']);
            }
        }
    }
}