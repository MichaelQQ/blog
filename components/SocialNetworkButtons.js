const socialNetworkButtons = [
  {
    link: 'https://github.com/MichaelQQ',
    icon: 'fa-github',
    style: {
      color: '#2d2727',
      background: '#4e4e4e',
      borderRadius: '100%'
    }
  }, {
    link: 'https://twitter.com/MichaelTu10',
    icon: 'fa-twitter',
    style: {
      color: '#1da1f2',
      background: '#4e9cce',
      borderRadius: '100%'
    }
  // }, {
  //   link: 'https://medium.com/@MichaelQQ',
  //   icon: 'fa-medium',
  //   style: {
  //     color: '#01ab6c',
  //     background: '#2db381',
  //     borderRadius: '100%'
  //   }
  }, {
    link: 'https://www.linkedin.com/in/michaelqq/',
    icon: 'fa-linkedin',
    style: {
      color: '#0177b5',
      background: '#2787b9',
      borderRadius: '100%'
    }
  }, {
    link: 'mailto:mr.tu@michaelqq.com',
    icon: 'fa-envelope',
    style: {
      color: '#2d2727',
      background: '#4e4e4e',
      borderRadius: '100%'
    }
  }
]

const SocialNetworkButton = ({link, style, icon}) => (
  <a href={link} style={{margin: '0 .25em'}}>
    <span className="fa-stack fa-2x">
      <i className="fa fa-circle fa-stack-2x" style={style}></i>
      <i className={icon + " fa fa-stack-1x fa-inverse"}></i>
    </span>
  </a>
)  

const SocialNetworkButtons = () => (
  <div>
    {socialNetworkButtons.map((button, index) => 
      <SocialNetworkButton 
        link={button.link}
        style={button.style}
        icon={button.icon}
        key={index}
      />
    )}
  </div>
)

export default SocialNetworkButtons