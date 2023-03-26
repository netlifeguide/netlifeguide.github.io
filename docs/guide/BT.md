# BT 下载 - 从入门到买 NAS
## 什么是 BT
BT 即 BitTorrent，是一个开放的点对点文件下载协议。
和从服务器下载资源不同，BT 下载的内容完全来源于其他用户的上传。也就是说 BT 是一种“人人为我，我为人人”的下载方式，请务必记住这一点。
## 选择 BT 客户端
::: tip 提醒
请注意，从 GitHub 直接下载文件对您的网络有一定要求，建议使用[ghproxy](https://ghproxy.com)代理下载链接。
:::
- [qBittorrent](https://www.qbittorrent.org/)
老牌又稳定，足够应对几乎所有需求。开源&全 PC 平台兼容。
- [qBittorrent Enhanced Edition](https://github.com/c0re100/qBittorrent-Enhanced-Edition/releases)
前者的增强版，加入了自动更新 trackers 服务器列表和反吸血 (指只下载不上传的用户) 功能。开源&全 PC 平台兼容。
在 Windows 10&11 上可以通过执行以下指令安装。
`winget install c0re100.qBittorrent-Enhanced-Edition`
- [Motrix](https://motrix.app)
国人开发的下载软件，界面美观，并且支持 HTTP 直链多线程下载，迅雷链接处理等功能。但软件体积极为庞大，仅作为 BT 下载器并不合适。
- [比特彗星](https://www.bitcomet.com)
国人开发的 BT 软件，较久未更新，并且存在一些问题，并不特别推荐使用。闭源&仅支持 Windows 和 macOS。
## 设置软件
::: info 提示
因为笔者个人使用 qBittorrent Enhanced Edition，所以以此为例。
部分显而易见的配置项不再赘述
:::
在极少数环境下，qBittorrent Enhanced Edition 不会自动将语言设置为中文，设置中切换为其他语言并重启软件，之后再次设置为中文即可。

首先我们需要配置 trackers 列表自动更新，详情请参考[该页面的教程](https://trackerslist.com/#/zh)。

### “连接”选项卡
- 建议取消勾选连接限制，会轻微增加性能消耗，但下载速度可能会有提升。
- 代理设置取决于个人需求，一般来讲，当您所在国家或地区不允许使用 BT 网络时才应使用代理下载文件。并确保勾选“使用代理服务器进行用户连接”并取消勾选“只对 torrent 启动代理”。
如果您并非这种情况，那么使用代理一般不会给您带来更多好处。

### “BitTorrent”选项卡
- 加密模式设置为“允许加密”，可以同时连接加密用户和未加密用户。
- 建议勾选“启用匿名模式”，可以减少您的客户端在与其他用户交流的过程中可能会泄露的隐私。**但请注意：该功能不能完全隐藏您的行踪，如果您有匿名需求，请务必设置代理**

### “高级”选项卡
- 您可以在此选择是否禁用来自中国大陆地区的 BT 客户端，或者是否禁用使用了 BT 协议的媒体播放器。但笔者并不建议这样做，大概率得不偿失。

## 使用 BT
接下来，您可以通过导入一个 torrent 文件或者打开磁力链接来下载文件了。默认情况下，qBittorrent Enhanced Edition 会自动开始连接本地用户网络。
如果出现问题，您可以下载一份热门 BT 资源来获得足够的 DHT 节点数。
笔者个人推荐下载一份[Ubuntu 22.10 系统镜像](https://releases.ubuntu.com/22.10/ubuntu-22.10-desktop-amd64.iso.torrent)，一般来说，该文件的下载速度就是您 BT 下载的最快速度。

## 寻找资源
至此，您已经配置好了您的 BT 客户端，接下来就是寻找资源并下载了。
请参见 