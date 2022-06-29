function Books({arr}) {
    console.log(arr); // 👉️ ['A', 'B', 'C', 'D']
    return (
      <div>
        {arr.map(title => {
          return <div key={title}>{title}</div>;
        })}
      </div>
    );
  }
  

  