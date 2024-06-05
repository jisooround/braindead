interface List {
  name: string;
  path: string;
}

type Props = {
  title: string;
  list: List[];
};

const FooterMenu = ({ title, list }: Props) => {
  console.log("list", list);
  return (
    <>
      <p>{title}</p>
      <ul>
        {list.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.path}>{item.name}</a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default FooterMenu;
