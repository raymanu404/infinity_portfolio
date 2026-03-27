import React from 'react';

const ManipulateDOM: React.FC = () => {
  const scrollRef = React.useRef<HTMLUListElement>(null);

  const scrollToIndex = (index: number) => {
    const listNode = scrollRef.current;

    const imgNode = listNode?.querySelectorAll('li > img')[index];
    imgNode?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  };

  return (
    <div style={{ height: '200px', overflow: 'auto' }}>
      <nav
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '10px',
          justifyContent: 'center',
          marginBottom: '20px',
        }}
      >
        <button onClick={() => scrollToIndex(0)}>Neo</button>
        <button onClick={() => scrollToIndex(1)}>Millie</button>
        <button onClick={() => scrollToIndex(2)}>Bella</button>
      </nav>
      <ul
        ref={scrollRef}
        style={{
          listStyle: 'none',
        }}
      >
        <li>
          <img src="https://placecats.com/neo/300/200" alt="Neo" />
        </li>
        <li>
          <img src="https://placecats.com/millie/200/200" alt="Millie" />
        </li>
        <li>
          <img src="https://placecats.com/bella/199/200" alt="Bella" />
        </li>
      </ul>
    </div>
  );
};

ManipulateDOM.displayName = 'ManipulateDOM';

export default ManipulateDOM;
