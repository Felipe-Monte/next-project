import React from 'react';

export default function Width() {
  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    const handleResize = () => {
      setWidth(document.documentElement.clientWidth);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [active, setActive] = React.useState(false);

  return (
    <div>
      <h2 style={{ color: active ? 'green' : 'red' }}>
        Largura da tela: {width}
      </h2>
      <button onClick={() => setActive((b) => !b)}>Ativar</button>
    </div>
  );
}
