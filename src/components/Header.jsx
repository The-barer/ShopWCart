export default function Header() {
  return (
    <nav className='green darken-1'>
      <div className='nav-wrapper'>
        <a href='#!' className='brand-logo'>
          Goods
        </a>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <a
              href='https://github.com/The-barer/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Repository
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
