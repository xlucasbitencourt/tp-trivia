import React from 'react';

function MainHeader() {
  const link = <a href="https://lucasbitencourt.com.br/">Lucas Btencourt</a>;
  return (
    <div className="main-header">
      <p>
        Projeto feito por
        {' '}
        {link}
      </p>
    </div>
  );
}

export default MainHeader;
