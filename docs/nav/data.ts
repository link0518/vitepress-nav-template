import type { NavLink } from '../.vitepress/theme/types'

type NavData = {
  title: string
  items: NavLink[]
}

export const NAV_DATA: NavData[] = [
  {
    title: '我的',
    items: [
      {
        title: '我的视频站',
        link: 'https://blog.zombiepig.cn/',
        icon: 'https://blog.zombiepig.cn/favicon.ico',
        desc: '游戏录屏',
      },
      {
        title: '简单图床-Easylmage',
        link: 'https://image.guyong.ac.cn/',
        icon: 'https://image.guyong.ac.cn/favicon.ico',
        desc: '服务器部署的图床工具',
      },
      // {
      //   title: '仪表盘咕涌の小破站一WordPress',
      //   link: 'http://zombiepig.cn/wp-admin/index.php',
      //   icon: 'http://zombiepig.cn/wp-admin/favicon.ico',
      //   desc: '',
      // },
      {
        title: '文件快递柜-FileCodeBox',
        link: 'https://beet.us.kg/#/',
        icon: './public/icons/file.svg', // 修改文件名为英文
        desc: '一个方便的文件传输工具。',
      },
      {
        title: 'telegram图床',
        link: 'https://img.zombiepig.cn/dashboard',
        icon: './public/icons/image_management.svg', // 修改文件名为英文
        desc: '基于Telegram的图床服务。',
      },
      {
        title: 'Cloudflare临时邮件',
        link: 'https://tmp.zombiepig.cn/',
        icon: 'https://tmp.zombiepig.cn/favicon.ico',
        desc: '提供临时邮件服务。',
      },
      {
        title: 'Vmail - Virtual Temporary Email',
        link: 'https://mm.zombiepig.cn/',
        icon: 'https://mm.zombiepig.cn/favicon.ico',
        desc: '虚拟临时邮件服务。',
      },
      {
        title: '甜菜的博客',
        link: 'https://v.zombiepig.cn/',
        icon: 'public/icons/blog.svg', // 修改文件名为英文
        desc: '分享个人见解和经验的博客。',
      },
      {
        title: 'serv00保活',
        link: 'https://xui.zombiepig.cn/',
        icon: './public/icons/system.svg', // 修改文件名为英文
        desc: '服务器保活管理工具。',
      },
      {
        title: 'xui系统状态',
        link: 'https://xui.bof.us.kg/xui/',
        icon: './public/icons/system.svg', // 修改文件名为英文
        desc: '查看xui系统状态。',
      },
      {
        title: 'Memos-Japan',
        link: 'https://7siu.us.kg/',
        icon: './public/icons/memos.svg',
        desc: '日本版Memos服务。',
      },
      {
        title: 'Memos-serv00',
        link: 'https://esiu.us.kg/',
        icon: './public/icons/memos.svg',
        desc: 'serv00版Memos服务。',
      },
      {
        title: '密码本',
        link: 'https://text.plei.me/link',
        icon: './public/icons/mima.svg', // 新增图标文件
        desc: '加密笔记服务。',
      },
      
      {
        icon: 'https://www.json.cn/favicon.ico',
        title: 'Json 中文网',
        desc: 'JSON 在线解析及格式化验证',
        link: 'https://www.json.cn',
      },
      {
        icon: 'https://momoyu.cc/icon-192.png',
        title: '摸摸鱼热榜',
        desc: '聚合每日热门、搞笑、有趣、适合摸鱼的资讯',
        link: 'https://momoyu.cc',
      }
    ],
  },
]
