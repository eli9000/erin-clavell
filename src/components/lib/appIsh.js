<Main className="Main" id="main">
  <div className="Main-Quote">
    Commitment to Community
          </div>
  <Content className="Main-Content" title="Welcome" link="home">
    <RenderList className="RenderList-Main" data={VOWS} />
  </Content>
</Main>

  <About className="About" id="about">
    <Content className="About-Content" title="About Me" link="about">
      <RenderList className="RenderList-About" data={ABOUT} />
    </Content>
    <Image className="About-Image" src="/images/ec-about.jpg" height="auto" width="60%" />
  </About>

  <Issues className="Issues" id="issues">
    <Content className="Issues-Content" title="On the Issues" link="issues">
      <RenderList className="RenderList-Issues" data={ISSUES} />
    </Content>
    <Image className="Issues-Image" src="/images/ec-transparent.png" />
  </Issues>

  <Involve className="Involve" id="involve">
    <Content className="Involve-Content" title="Get Involved" link="involve">

    </Content>
  </Involve>