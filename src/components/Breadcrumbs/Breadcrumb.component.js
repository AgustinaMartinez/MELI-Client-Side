import './_breadcrumb.scss';

const Breadcrumb = ({ breadcrumb }) => {
  return (
    <ul className="breadcrumbs">
      <li className="breadcrumbs__item">{breadcrumb}</li>
    </ul>
  );
}

export default Breadcrumb;
