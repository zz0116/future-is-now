/* ============================================================
   data.js — Predictions & Timeline Data (bilingual)
   ============================================================ */

const predictions = [
  {
    id:1, icon:"🤖", category:"ai", progress:55, status:"progressing",
    predictedYear:"2029-2045",
    searchKey: "artificial general intelligence AGI breakthrough",
    zh:{title:"通用人工智能 (AGI)",prediction:"机器拥有与人类同等的通用智能，能自主完成任何智力任务",source:"图灵 (1950)、库兹韦尔 (2005)",desc:"大语言模型（GPT-4、Claude、Gemini 等）已展现出强大的推理、编程、创作能力。多模态 AI 可同时处理文本、图像、音频和视频。但 AGI 所需的自主目标设定、持续学习和通用世界模型仍未实现。",detail:"2024-2025 年，AI 领域经历了爆发式增长。OpenAI 的 o1/o3 模型展示了深度推理能力，Google DeepMind 的 Gemini 实现了原生多模态。AI Agent（智能体）开始能自主完成复杂任务链。然而，当前 AI 仍缺乏真正的理解力、常识推理和自我意识，距离 AGI 仍有本质差距。",milestones:[{year:"2017",text:"Transformer 架构发布"},{year:"2022",text:"ChatGPT 发布，AI 进入大众视野"},{year:"2024",text:"多模态大模型成熟，AI Agent 兴起"},{year:"2025",text:"推理模型突破，AI 编程接近人类"},{year:"2029?",text:"库兹韦尔预测 AGI 实现"}]},
    en:{title:"Artificial General Intelligence (AGI)",prediction:"Machines with human-level general intelligence that can autonomously perform any intellectual task",source:"Turing (1950), Kurzweil (2005)",desc:"Large language models (GPT-4, Claude, Gemini) show powerful reasoning, coding, and creative abilities. Multimodal AI processes text, images, audio, and video. But AGI requirements — autonomous goal-setting, continuous learning, general world models — remain unachieved.",detail:"In 2024-2025, AI experienced explosive growth. OpenAI's o1/o3 demonstrated deep reasoning, Gemini achieved native multimodality, AI Agents began completing complex task chains. However, current AI still lacks true understanding, common-sense reasoning, and self-awareness.",milestones:[{year:"2017",text:"Transformer architecture published"},{year:"2022",text:"ChatGPT launches, AI goes mainstream"},{year:"2024",text:"Multimodal models mature, AI Agents emerge"},{year:"2025",text:"Reasoning breakthroughs, AI coding nears human level"},{year:"2029?",text:"Kurzweil's predicted AGI year"}]}
  },
  {
    id:2, icon:"🧠", category:"ai", progress:25, status:"early",
    predictedYear:"2030-2050",
    searchKey: "Neuralink brain computer interface implant",
    zh:{title:"脑机接口",prediction:"人脑直接与计算机连接，实现思维控制和意识上传",source:"科幻文学 (1970s)、Neuralink (2016)",desc:"Neuralink 已完成多例人体植入实验，患者可通过思维控制光标。非侵入式脑机接口也在快速发展。但高带宽双向通信和意识上传仍属科幻范畴。",detail:"2024 年 1 月，Neuralink 完成首例人体芯片植入，患者 Noland Arbaugh 成功用思维控制电脑。2025 年计划扩展至 20-30 名患者。Synchron 等公司的血管内脑机接口也取得进展。但意识上传涉及的神经科学基础问题远未解决。",milestones:[{year:"2012",text:"BrainGate 让瘫痪患者用思维控制机械臂"},{year:"2024",text:"Neuralink 首例人体植入成功"},{year:"2025",text:"计划扩展至 20-30 名患者"},{year:"2030?",text:"预计高带宽脑机接口商业化"}]},
    en:{title:"Brain-Computer Interface",prediction:"Direct brain-to-computer connection enabling thought control and consciousness uploading",source:"Sci-fi (1970s), Neuralink (2016)",desc:"Neuralink completed multiple human implants — patients control cursors with thought. Non-invasive BCIs advance rapidly. But high-bandwidth bidirectional communication and consciousness uploading remain sci-fi.",detail:"In January 2024, Neuralink completed its first human chip implant. Patient Noland Arbaugh controlled a computer with his thoughts. Plans for 2025 include 20-30 patients. Synchron's endovascular BCI also progressed. But consciousness uploading neuroscience remains far from solved.",milestones:[{year:"2012",text:"BrainGate enables thought-controlled robotic arms"},{year:"2024",text:"Neuralink first human implant succeeds"},{year:"2025",text:"Plans to expand to 20-30 patients"},{year:"2030?",text:"Expected high-bandwidth BCI commercialization"}]}
  },
  {
    id:3, icon:"🚀", category:"space", progress:15, status:"concept",
    predictedYear:"2030-2050",
    searchKey: "SpaceX Starship Mars colonization",
    zh:{title:"火星殖民",prediction:"人类在火星建立永久定居点，实现多行星物种",source:"冯·布劳恩 (1952)、SpaceX (2016)",desc:"SpaceX 星舰已完成多次试飞并实现助推器回收。NASA 毅力号持续探索。但载人火星任务、生命维持系统仍在开发中。",detail:"SpaceX 星舰是人类有史以来最大的运载火箭，2024-2025 年完成多次轨道试飞，成功实现助推器「筷子夹」回收。马斯克计划 2026 年发射首艘无人星舰前往火星。但火星殖民面临辐射防护、食物生产、心理健康等巨大挑战。",milestones:[{year:"2021",text:"毅力号着陆火星，释放机智号直升机"},{year:"2024",text:"星舰轨道试飞，助推器成功回收"},{year:"2026?",text:"计划首次无人火星发射"},{year:"2030s",text:"预计首次载人火星任务"}]},
    en:{title:"Mars Colonization",prediction:"Humans establish permanent settlements on Mars, becoming multi-planetary",source:"von Braun (1952), SpaceX (2016)",desc:"SpaceX Starship completed multiple test flights with booster recovery. NASA Perseverance continues exploration. But crewed Mars missions and life support remain in development.",detail:"Starship, the largest rocket ever built, completed multiple orbital test flights in 2024-2025 with 'chopstick catch' booster recovery. Musk plans first uncrewed Mars launch in 2026. But Mars colonization faces radiation, food production, and psychological challenges.",milestones:[{year:"2021",text:"Perseverance lands on Mars, deploys Ingenuity"},{year:"2024",text:"Starship orbital test, booster recovered"},{year:"2026?",text:"Planned first uncrewed Mars launch"},{year:"2030s",text:"Expected first crewed Mars mission"}]}
  },
  {
    id:4, icon:"🧬", category:"bio", progress:70, status:"progressing",
    predictedYear:"2020-2035",
    searchKey: "CRISPR gene editing therapy approved",
    zh:{title:"基因编辑治疗疾病",prediction:"通过编辑人类基因组，根治遗传性疾病",source:"基因组计划 (1990)、CRISPR (2012)",desc:"CRISPR 基因编辑疗法已获 FDA 批准治疗镰状细胞病。基因治疗在多种罕见病中取得突破。但复杂多基因疾病和伦理问题仍是挑战。",detail:"2023 年底，全球首款 CRISPR 疗法 Casgevy 获批。碱基编辑和先导编辑进一步提高精度。CAR-T 细胞疗法在血液肿瘤中展现治愈潜力。但脱靶效应、递送效率和伦理监管仍需解决。",milestones:[{year:"2012",text:"CRISPR-Cas9 技术发表"},{year:"2020",text:"CRISPR 发明者获诺贝尔奖"},{year:"2023",text:"首款 CRISPR 疗法获 FDA 批准"},{year:"2025",text:"碱基编辑进入多项临床试验"}]},
    en:{title:"Gene Editing Cures",prediction:"Editing the human genome to permanently cure genetic diseases",source:"Genome Project (1990), CRISPR (2012)",desc:"CRISPR therapy FDA-approved for sickle cell disease. Gene therapy breakthroughs in rare diseases. But complex polygenic diseases and ethics remain challenging.",detail:"In late 2023, the first CRISPR therapy Casgevy was approved. Base editing and prime editing improved precision. CAR-T shows curative potential in blood cancers. But off-target effects, delivery, and ethics need resolution.",milestones:[{year:"2012",text:"CRISPR-Cas9 published"},{year:"2020",text:"CRISPR inventors win Nobel Prize"},{year:"2023",text:"First CRISPR therapy FDA-approved"},{year:"2025",text:"Base editing enters clinical trials"}]}
  },
  {
    id:5, icon:"🚗", category:"transport", progress:60, status:"progressing",
    predictedYear:"2020-2030",
    searchKey: "autonomous driving Waymo Tesla FSD robotaxi",
    zh:{title:"完全自动驾驶",prediction:"汽车完全自主驾驶，无需人类干预",source:"通用 Futurama (1939)、Google (2009)",desc:"Waymo 无人出租车已在多个美国城市商业运营。百度萝卜快跑大规模部署。特斯拉 FSD 持续迭代。但 L5 级全场景自动驾驶仍未实现。",detail:"Waymo 在旧金山、洛杉矶等城市运营完全无人出租车，每周超 15 万次付费行程。百度在武汉等城市大规模运营。特斯拉 FSD V13 接近 L3 水平。但极端天气、复杂路况的可靠性及法规仍是障碍。",milestones:[{year:"2009",text:"Google 启动自动驾驶项目"},{year:"2020",text:"Waymo 在凤凰城开放无人运营"},{year:"2024",text:"Waymo 扩展多城市，百度大规模部署"},{year:"2025",text:"特斯拉 FSD V13 接近 L3"}]},
    en:{title:"Fully Autonomous Driving",prediction:"Cars drive completely autonomously without human intervention",source:"GM Futurama (1939), Google (2009)",desc:"Waymo robotaxis operate in multiple US cities. Baidu Apollo Go scales in China. Tesla FSD iterates. But L5 full-scenario autonomy remains unachieved.",detail:"Waymo operates driverless taxis in SF, LA, Phoenix with 150K+ weekly paid trips. Baidu scales in Wuhan. Tesla FSD V13 approaches L3. But extreme weather reliability and regulations remain barriers.",milestones:[{year:"2009",text:"Google launches self-driving project"},{year:"2020",text:"Waymo opens driverless service in Phoenix"},{year:"2024",text:"Waymo expands, Baidu scales up"},{year:"2025",text:"Tesla FSD V13 approaches L3"}]}
  },
  {
    id:6, icon:"🛸", category:"transport", progress:35, status:"early",
    predictedYear:"2020-2040",
    searchKey: "eVTOL flying car urban air mobility commercial",
    zh:{title:"飞行汽车 / eVTOL",prediction:"个人飞行器成为日常交通工具",source:"科幻黄金时代 (1950s)",desc:"eVTOL 多家公司已完成试飞，Joby、亿航等接近商业化。城市空中交通概念逐步落地，但大规模普及仍需时日。",detail:"Joby 和 Archer 推进 FAA 认证，预计 2025-2026 年商业运营。亿航 EH216-S 已获中国适航证。但空域管理、噪音、基础设施和成本是关键挑战。",milestones:[{year:"2023",text:"亿航获中国民航局适航证"},{year:"2024",text:"Joby 完成纽约首次 eVTOL 飞行"},{year:"2025",text:"多家公司计划启动商业运营"},{year:"2030s",text:"预计城市空中交通网络形成"}]},
    en:{title:"Flying Cars / eVTOL",prediction:"Personal flying vehicles become everyday transportation",source:"Sci-fi Golden Age (1950s)",desc:"Multiple eVTOL companies completed test flights. Joby and EHang near commercialization. UAM gradually materializing, but mass adoption years away.",detail:"Joby and Archer progress through FAA certification, expected commercial ops 2025-2026. EHang EH216-S received CAAC certificate. But airspace, noise, infrastructure, and cost remain challenges.",milestones:[{year:"2023",text:"EHang receives CAAC airworthiness certificate"},{year:"2024",text:"Joby completes first NYC eVTOL flight"},{year:"2025",text:"Multiple companies plan commercial launch"},{year:"2030s",text:"Expected initial UAM networks"}]}
  },
  {
    id:7, icon:"⚡", category:"energy", progress:20, status:"early",
    predictedYear:"2035-2060",
    searchKey: "nuclear fusion energy breakthrough ITER",
    zh:{title:"可控核聚变发电",prediction:"实现「人造太阳」，提供近乎无限的清洁能源",source:"核物理学 (1950s)、ITER (1985)",desc:"2022 年 NIF 首次实现聚变点火。ITER 建设推进中。多家私营公司获巨额融资。但商业发电站仍需数十年。",detail:"2022 年 12 月 NIF 首次实现聚变点火。ITER 在法国建设中。Commonwealth Fusion Systems 等采用新技术路线。中国 EAST 创造等离子体运行纪录。但工程化和经济可行性仍是巨大挑战。",milestones:[{year:"2022",text:"NIF 首次实现聚变点火"},{year:"2023",text:"NIF 重复点火并提高增益"},{year:"2025",text:"多家公司计划建造原型反应堆"},{year:"2035?",text:"ITER 计划全功率运行"}]},
    en:{title:"Controlled Nuclear Fusion",prediction:"Achieving an 'artificial sun' for virtually unlimited clean energy",source:"Nuclear physics (1950s), ITER (1985)",desc:"NIF achieved fusion ignition in 2022. ITER construction progresses. Private companies secured massive funding. But commercial power plants are decades away.",detail:"In December 2022, NIF achieved fusion ignition. ITER is under construction in France. CFS and TAE accelerate with new approaches. China's EAST set plasma duration records. But engineering and economics remain enormous challenges.",milestones:[{year:"2022",text:"NIF achieves fusion ignition"},{year:"2023",text:"NIF repeats ignition with higher gain"},{year:"2025",text:"Private companies plan prototype reactors"},{year:"2035?",text:"ITER plans full-power operation"}]}
  },
  {
    id:8, icon:"🦾", category:"ai", progress:40, status:"early",
    predictedYear:"2025-2040",
    searchKey: "humanoid robot Tesla Optimus Figure",
    zh:{title:"人形机器人",prediction:"类人机器人进入家庭和工作场所",source:"阿西莫夫 (1950)、ASIMO (2000)",desc:"特斯拉 Optimus、Figure 等快速迭代。已能行走、抓取、简单任务。AI 大模型赋予交互能力。但灵巧操作和通用性仍有差距。",detail:"2024-2025 年人形机器人爆发。Optimus Gen 2 展示流畅行走和精细抓取。Figure 02 集成大模型实现语言交互。中国宇树、智元快速追赶。但复杂环境自主决策和长时间可靠运行仍需突破。",milestones:[{year:"2000",text:"本田 ASIMO 亮相"},{year:"2023",text:"特斯拉 Optimus 原型展示"},{year:"2024",text:"Figure 02 集成大模型"},{year:"2025",text:"计划生产数千台 Optimus"}]},
    en:{title:"Humanoid Robots",prediction:"Human-like robots enter homes and workplaces",source:"Asimov (1950), ASIMO (2000)",desc:"Tesla Optimus, Figure iterate rapidly. They walk, grasp, do simple tasks. LLMs give interaction abilities. But dexterous manipulation and generality still lag.",detail:"2024-2025 is the breakout year. Optimus Gen 2 shows fluid walking and fine grasping. Figure 02 integrates LLM for language interaction. Chinese companies catch up fast. But autonomous decision-making and reliability need breakthroughs.",milestones:[{year:"2000",text:"Honda ASIMO debuts"},{year:"2023",text:"Tesla Optimus prototype"},{year:"2024",text:"Figure 02 integrates LLM"},{year:"2025",text:"Plans for thousands of Optimus units"}]}
  },
  {
    id:9, icon:"🏥", category:"bio", progress:25, status:"early",
    predictedYear:"2030-2045",
    searchKey: "3D bioprinting organ transplant",
    zh:{title:"器官 3D 打印",prediction:"用 3D 生物打印制造可移植的人体器官",source:"再生医学 (2000s)",desc:"已成功打印皮肤、软骨等简单组织。微型肝脏、肾脏已在实验室制造。但全尺寸功能性器官仍面临血管化等挑战。",detail:"研究人员已打印出功能性微型肝脏和肾脏组织。打印皮肤和软骨已进入临床试验。但全尺寸、完整血管网络的可移植器官仍是最大挑战。",milestones:[{year:"2019",text:"以色列团队打印微型心脏"},{year:"2023",text:"3D 打印皮肤进入临床试验"},{year:"2024",text:"微型功能性肾脏组织打印成功"},{year:"2035?",text:"预计首个可移植 3D 打印器官"}]},
    en:{title:"3D-Printed Organs",prediction:"Using 3D bioprinting to manufacture transplantable human organs",source:"Regenerative medicine (2000s)",desc:"Skin, cartilage successfully printed. Miniature liver and kidney created in labs. But full-size functional organs face vascularization challenges.",detail:"Researchers printed functional miniature liver and kidney tissues. Printed skin and cartilage entered clinical trials. But full-size, vascularized, transplantable organs remain bioengineering's greatest challenge.",milestones:[{year:"2019",text:"Israeli team prints miniature heart"},{year:"2023",text:"3D-printed skin enters clinical trials"},{year:"2024",text:"Functional miniature kidney printed"},{year:"2035?",text:"Expected first transplantable 3D-printed organ"}]}
  },
  {
    id:10, icon:"🌐", category:"life", progress:30, status:"early",
    predictedYear:"2030-2040",
    searchKey: "metaverse VR AR spatial computing Apple Vision",
    zh:{title:"元宇宙 / 沉浸式虚拟世界",prediction:"人类在虚拟世界中工作、社交和生活",source:"《雪崩》(1992)、《头号玩家》(2011)",desc:"Apple Vision Pro 和 Meta Quest 推动空间计算。VR/AR 日趋成熟。但真正沉浸式持久化的虚拟世界生态尚未形成。",detail:"Apple Vision Pro（2024）将空间计算带入主流。Meta Quest 3 降低 VR 门槛。但设备重量、续航、内容生态仍有问题。真正的元宇宙需要解决互操作性和数字经济基础设施。",milestones:[{year:"2016",text:"Oculus Rift / HTC Vive 开启消费级 VR"},{year:"2023",text:"Meta Quest 3 发布"},{year:"2024",text:"Apple Vision Pro 发布"},{year:"2030s",text:"预计轻量 AR 眼镜取代手机"}]},
    en:{title:"Metaverse / Immersive VR",prediction:"Humans work, socialize, and live in virtual worlds",source:"Snow Crash (1992), Ready Player One (2011)",desc:"Apple Vision Pro and Meta Quest drive spatial computing. VR/AR maturing. But truly immersive, persistent virtual world ecosystems haven't formed.",detail:"Apple Vision Pro (2024) brought spatial computing mainstream. Meta Quest 3 lowered VR barriers. But weight, battery, content ecosystem issues remain. True metaverse needs interoperability and digital economy infrastructure.",milestones:[{year:"2016",text:"Oculus Rift / HTC Vive launch consumer VR"},{year:"2023",text:"Meta Quest 3 launches"},{year:"2024",text:"Apple Vision Pro launches"},{year:"2030s",text:"Expected lightweight AR glasses replace phones"}]}
  },
  {
    id:11, icon:"🔋", category:"energy", progress:45, status:"early",
    predictedYear:"2027-2035",
    searchKey: "solid state battery production breakthrough",
    zh:{title:"固态电池革命",prediction:"固态电池取代锂离子电池，能量密度翻倍",source:"电池技术研究 (2010s)",desc:"丰田、三星 SDI、QuantumScape 取得重大进展。中国多家企业发布半固态电池。但全固态大规模量产仍面临挑战。",detail:"丰田计划 2027-2028 年量产固态电池，能量密度 2 倍以上。QuantumScape 展示多层原型。中国蔚来等已搭载半固态电池。但界面阻抗、循环寿命和制造成本是瓶颈。",milestones:[{year:"2023",text:"丰田宣布固态电池重大突破"},{year:"2024",text:"中国多款半固态电池车型上市"},{year:"2027?",text:"丰田计划量产全固态电池"},{year:"2030s",text:"预计固态电池大规模普及"}]},
    en:{title:"Solid-State Battery Revolution",prediction:"Solid-state batteries replace lithium-ion with 2x energy density",source:"Battery research (2010s)",desc:"Toyota, Samsung SDI, QuantumScape made major progress. Chinese companies released semi-solid products. But all-solid-state mass production faces challenges.",detail:"Toyota plans mass production by 2027-2028 with 2x+ energy density. QuantumScape demonstrated multi-layer prototypes. NIO deployed semi-solid batteries. But interface resistance, cycle life, and costs remain bottlenecks.",milestones:[{year:"2023",text:"Toyota announces solid-state breakthrough"},{year:"2024",text:"Chinese semi-solid battery vehicles launch"},{year:"2027?",text:"Toyota plans all-solid-state mass production"},{year:"2030s",text:"Expected widespread adoption"}]}
  },
  {
    id:12, icon:"🧪", category:"bio", progress:20, status:"early",
    predictedYear:"2035-2060",
    searchKey: "anti-aging longevity research breakthrough",
    zh:{title:"抗衰老 / 寿命延长",prediction:"医学干预延长健康寿命至 120-150 岁",source:"老年学研究、库兹韦尔 (2005)",desc:"衰老生物学重大突破，多种抗衰老药物进入临床试验。细胞重编程在动物中逆转衰老。但人类寿命显著延长尚未实现。",detail:"山中因子细胞重编程在小鼠中逆转衰老标志。二甲双胍等进入抗衰老临床试验。Altos Labs 等获数十亿融资。表观遗传时钟可测量生物年龄。但动物到人类的转化仍需漫长过程。",milestones:[{year:"2006",text:"山中伸弥发现细胞重编程因子"},{year:"2023",text:"多项抗衰老药物进入临床试验"},{year:"2024",text:"细胞重编程在灵长类取得进展"},{year:"2040?",text:"预计首批抗衰老疗法获批"}]},
    en:{title:"Anti-Aging / Life Extension",prediction:"Medical interventions extend healthy lifespan to 120-150 years",source:"Gerontology, Kurzweil (2005)",desc:"Major aging biology breakthroughs. Multiple anti-aging drugs in clinical trials. Cellular reprogramming reverses aging in animals. But significant human lifespan extension unachieved.",detail:"Yamanaka factor reprogramming reversed aging markers in mice. Metformin entered anti-aging trials. Altos Labs secured billions. Epigenetic clocks measure biological age. But animal-to-human translation requires a long journey.",milestones:[{year:"2006",text:"Yamanaka discovers reprogramming factors"},{year:"2023",text:"Anti-aging drugs enter clinical trials"},{year:"2024",text:"Reprogramming progresses in primates"},{year:"2040?",text:"Expected first approved anti-aging therapies"}]}
  },
  {
    id:13, icon:"🛰️", category:"life", progress:80, status:"realized",
    predictedYear:"2025-2030",
    searchKey: "Starlink satellite internet global coverage",
    zh:{title:"全球卫星互联网",prediction:"卫星星座实现全球高速互联网覆盖",source:"Teledesic (1994)、Starlink (2015)",desc:"Starlink 已部署超 6,000 颗卫星，覆盖 70+ 国家，用户超 400 万。直连手机卫星通信已开始测试。",detail:"Starlink 是人类最大的卫星星座，全球提供高速互联网。2024 年推出直连手机服务。亚马逊 Kuiper、中国 G60 等竞争者快速部署。卫星互联网正在弥合数字鸿沟。",milestones:[{year:"2019",text:"Starlink 首批 60 颗卫星发射"},{year:"2023",text:"用户突破 200 万"},{year:"2024",text:"直连手机卫星通信测试"},{year:"2025",text:"用户超 400 万，覆盖 70+ 国家"}]},
    en:{title:"Global Satellite Internet",prediction:"Satellite constellations providing global high-speed internet",source:"Teledesic (1994), Starlink (2015)",desc:"Starlink deployed 6,000+ satellites, covering 70+ countries with 4M+ users. Direct-to-phone satellite communication being tested.",detail:"Starlink is the largest satellite constellation, providing global high-speed internet. Direct-to-phone service launched in 2024. Amazon Kuiper and China's G60 rapidly deploying. Satellite internet bridges the digital divide.",milestones:[{year:"2019",text:"Starlink launches first 60 satellites"},{year:"2023",text:"Surpasses 2 million users"},{year:"2024",text:"Direct-to-phone testing begins"},{year:"2025",text:"Exceeds 4M users, 70+ countries"}]}
  },
  {
    id:14, icon:"🏠", category:"life", progress:65, status:"progressing",
    predictedYear:"2020-2030",
    searchKey: "smart home AI Matter protocol",
    zh:{title:"智能家居全面互联",prediction:"家中所有设备智能互联，自动感知需求",source:"比尔·盖茨 (1995)、IoT (1999)",desc:"Matter 协议统一标准。AI 语音助手控制全屋。但真正主动式智能家居仍在发展中。",detail:"Matter 协议（2022）打破品牌壁垒。AI 大模型赋予更强理解力。智能门锁、灯光、温控已广泛部署。但系统仍以被动响应为主。",milestones:[{year:"2014",text:"Amazon Echo 发布"},{year:"2022",text:"Matter 协议发布"},{year:"2024",text:"AI 大模型集成到智能家居"},{year:"2030?",text:"预计主动式 AI 智能家居普及"}]},
    en:{title:"Fully Connected Smart Home",prediction:"All home devices intelligently connected, auto-sensing needs",source:"Bill Gates (1995), IoT (1999)",desc:"Matter protocol unifies standards. AI assistants control whole-home. But truly proactive smart homes still developing.",detail:"Matter protocol (2022) broke brand barriers. AI LLMs give stronger understanding. Smart locks, lighting, climate widely deployed. But systems remain primarily reactive.",milestones:[{year:"2014",text:"Amazon Echo launches"},{year:"2022",text:"Matter protocol released"},{year:"2024",text:"AI LLMs integrate into smart homes"},{year:"2030?",text:"Expected proactive AI smart homes"}]}
  },
  {
    id:15, icon:"🌊", category:"energy", progress:50, status:"progressing",
    predictedYear:"2025-2040",
    searchKey: "desalination technology breakthrough",
    zh:{title:"海水淡化解决水危机",prediction:"高效低成本海水淡化解决全球淡水短缺",source:"环境科学 (2000s)",desc:"反渗透成本大幅下降。以色列、沙特大规模应用。石墨烯膜等新技术有望进一步降低能耗。",detail:"以色列超 80% 饮用水来自海水淡化。沙特建成全球最大淡化厂。反渗透能耗降至理论极限 2-3 倍。太阳能淡化为缺电地区提供新方案。",milestones:[{year:"2015",text:"以色列 Sorek 成为全球最大淡化厂"},{year:"2023",text:"成本降至 $0.3-0.5/m³"},{year:"2025",text:"太阳能海水淡化突破"},{year:"2035?",text:"预计新型膜技术大幅降低能耗"}]},
    en:{title:"Desalination Solving Water Crisis",prediction:"Efficient desalination solving global freshwater shortage",source:"Environmental science (2000s)",desc:"Reverse osmosis costs dropped dramatically. Israel, Saudi Arabia deploy at scale. Graphene membranes promise further energy reduction.",detail:"Over 80% of Israel's drinking water from desalination. Saudi Arabia built world's largest plant. RO energy dropped to 2-3x theoretical minimum. Solar desalination offers new solutions.",milestones:[{year:"2015",text:"Israel's Sorek becomes largest RO plant"},{year:"2023",text:"Cost drops to $0.3-0.5/m³"},{year:"2025",text:"Solar desalination breakthrough"},{year:"2035?",text:"Expected new membranes cut energy use"}]}
  },
  {
    id:16, icon:"🔬", category:"ai", progress:30, status:"early",
    predictedYear:"2030-2040",
    searchKey: "quantum computing breakthrough error correction",
    zh:{title:"量子计算实用化",prediction:"量子计算机解决经典计算机无法处理的问题",source:"费曼 (1982)、Shor (1994)",desc:"Google、IBM 实现量子优越性。量子比特数持续增长。但纠错和退相干使通用量子计算仍需时日。",detail:"2024 年 Google Willow 芯片展示指数级量子优越性并在纠错上取得里程碑。IBM 推出 1000+ 量子比特处理器。但仍处于 NISQ 时代，商业应用有限。",milestones:[{year:"2019",text:"Google 宣布量子优越性"},{year:"2023",text:"IBM 推出 1000+ 量子比特处理器"},{year:"2024",text:"Google Willow 量子纠错突破"},{year:"2030s",text:"预计容错量子计算机出现"}]},
    en:{title:"Practical Quantum Computing",prediction:"Quantum computers solving classically impossible problems",source:"Feynman (1982), Shor (1994)",desc:"Google, IBM achieved quantum supremacy. Qubit counts growing. But error correction means general-purpose quantum computing is years away.",detail:"In 2024, Google's Willow chip demonstrated exponential quantum advantage and milestone error correction. IBM launched 1000+ qubit processors. But still in NISQ era with limited commercial applications.",milestones:[{year:"2019",text:"Google announces quantum supremacy"},{year:"2023",text:"IBM launches 1000+ qubit processor"},{year:"2024",text:"Google Willow error correction breakthrough"},{year:"2030s",text:"Expected fault-tolerant quantum computers"}]}
  },
  {
    id:17, icon:"🌍", category:"energy", progress:12, status:"concept",
    predictedYear:"2040-2060",
    searchKey: "carbon capture DAC direct air capture",
    zh:{title:"碳捕获与气候逆转",prediction:"大规模从大气中捕获 CO₂，逆转气候变化",source:"气候科学 (1990s)、IPCC",desc:"DAC 技术已有商业设施运行。但规模极小、成本高昂，需扩大数百万倍才能影响气候。",detail:"Climeworks 在冰岛运营 Orca 和 Mammoth，年捕获约 36,000 吨 CO₂。但全球年排放 370 亿吨。成本约 $400-600/吨，需降至 $100 以下。",milestones:[{year:"2021",text:"Climeworks Orca 投运"},{year:"2024",text:"Mammoth 启动，产能扩大 10 倍"},{year:"2025",text:"美国资助多个 DAC 枢纽"},{year:"2050?",text:"IPCC 目标：年捕获数十亿吨"}]},
    en:{title:"Carbon Capture & Climate Reversal",prediction:"Large-scale atmospheric CO₂ capture to reverse climate change",source:"Climate science (1990s), IPCC",desc:"DAC has commercial facilities operating. But scale is tiny and costs high. Millions-fold scale-up needed for climate impact.",detail:"Climeworks operates Orca and Mammoth in Iceland, capturing ~36,000 tons CO₂/year. Global emissions are ~37 billion tons/year. Current cost ~$400-600/ton, needs to drop below $100.",milestones:[{year:"2021",text:"Climeworks Orca begins operation"},{year:"2024",text:"Mammoth launches, 10x capacity"},{year:"2025",text:"US DOE funds DAC hubs"},{year:"2050?",text:"IPCC target: billions of tons/year"}]}
  },
  {
    id:18, icon:"🍖", category:"bio", progress:22, status:"early",
    predictedYear:"2025-2035",
    searchKey: "cultivated meat lab grown approved",
    zh:{title:"培养肉 / 细胞农业",prediction:"实验室培养真正的肉类，无需饲养屠宰",source:"丘吉尔 (1931)、Post (2013)",desc:"2023 年美国批准两家公司销售培养鸡肉。新加坡已有培养肉餐厅。但成本仍远高于传统肉类。",detail:"UPSIDE Foods 和 GOOD Meat 获 FDA/USDA 批准。新加坡自 2020 年允许销售。但成本仍为传统肉类 5-10 倍，培养基成本和生物反应器规模化是瓶颈。",milestones:[{year:"2013",text:"首个培养肉汉堡，成本 $33 万"},{year:"2020",text:"新加坡首批准培养肉销售"},{year:"2023",text:"美国批准培养鸡肉商业销售"},{year:"2030?",text:"预计成本与传统肉类持平"}]},
    en:{title:"Cultivated Meat",prediction:"Growing real meat in labs without raising and slaughtering animals",source:"Churchill (1931), Dr. Post (2013)",desc:"US approved two companies to sell cultivated chicken in 2023. Singapore has cultivated meat restaurants. But costs remain far higher than conventional.",detail:"UPSIDE Foods and GOOD Meat received FDA/USDA approval. Singapore allowed sales since 2020. But costs remain 5-10x conventional, with growth media and bioreactor scale-up as bottlenecks.",milestones:[{year:"2013",text:"First cultivated burger, cost $330,000"},{year:"2020",text:"Singapore first to approve cultivated meat"},{year:"2023",text:"US approves commercial cultivated chicken"},{year:"2030?",text:"Expected cost parity with conventional"}]}
  }
];

const timelineData = {
  zh:[
    {year:"1950s",text:"图灵提出机器智能概念；科幻黄金时代描绘飞行汽车、太空殖民、机器人"},
    {year:"1969",text:"阿波罗 11 号登月 — 科幻变为现实的标志性时刻"},
    {year:"1990s",text:"互联网普及，万维网诞生 — 超越了大多数科幻作家的想象"},
    {year:"2007",text:"iPhone 发布 — 科幻中的「掌上电脑」成为现实"},
    {year:"2012",text:"CRISPR 基因编辑技术发表，开启基因工程新纪元"},
    {year:"2016",text:"AlphaGo 击败围棋世界冠军，AI 能力震惊世界"},
    {year:"2020",text:"mRNA 疫苗一年内研发成功，改写疫苗历史"},
    {year:"2022",text:"ChatGPT 发布 / NIF 聚变点火 — AI 与能源双重突破"},
    {year:"2024",text:"星舰回收 / Vision Pro / Neuralink 人体植入"},
    {year:"2025",text:"AI Agent 兴起 / 人形机器人爆发 / 固态电池上车"},
    {year:"2030?",text:"预测：L5 自动驾驶 / 脑机接口商业化 / 量子计算实用化"},
    {year:"2040?",text:"预测：火星载人 / 核聚变发电 / 抗衰老疗法普及"},
    {year:"2050?",text:"预测：火星殖民地 / AGI / 意识上传 / 气候逆转"}
  ],
  en:[
    {year:"1950s",text:"Turing proposes machine intelligence; sci-fi Golden Age envisions flying cars, space colonies"},
    {year:"1969",text:"Apollo 11 Moon landing — the iconic moment sci-fi became reality"},
    {year:"1990s",text:"Internet goes mainstream, WWW born — surpassing most sci-fi imagination"},
    {year:"2007",text:"iPhone launches — the sci-fi 'handheld computer' becomes real"},
    {year:"2012",text:"CRISPR published, opening a new era of genetic engineering"},
    {year:"2016",text:"AlphaGo defeats world Go champion, AI stuns the world"},
    {year:"2020",text:"mRNA vaccines developed in under a year, rewriting history"},
    {year:"2022",text:"ChatGPT / NIF fusion ignition — dual AI & energy breakthroughs"},
    {year:"2024",text:"Starship caught / Vision Pro / Neuralink human implant"},
    {year:"2025",text:"AI Agents rise / Humanoid robots boom / Solid-state batteries"},
    {year:"2030?",text:"Predicted: L5 driving / BCI commercial / Practical quantum"},
    {year:"2040?",text:"Predicted: Crewed Mars / Fusion power / Anti-aging therapies"},
    {year:"2050?",text:"Predicted: Mars colony / AGI / Consciousness upload / Climate reversal"}
  ]
};
