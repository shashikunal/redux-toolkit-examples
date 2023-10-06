import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBooksApi, getBooksApi } from "../../redux/books/bookSlice";
import { Link } from "react-router-dom";

const AllBooks = () => {
  let dispatch = useDispatch();

  let { data, status } = useSelector(state => state.book);

  useEffect(() => {
    dispatch(getBooksApi());
  }, [dispatch]);

  let deleteBook = id => {
    dispatch(deleteBooksApi(id));
    window.location.assign("/all-books");
  };
  return (
    <section className="container">
      <article>
        <div className="main">
          <h1>All Books</h1>
          <aside>
            {status === true ? (
              "loading..."
            ) : (
              <ul>
                {data?.map(val => {
                  return (
                    <Fragment key={val.id}>
                      <li>
                        <span>
                          <h2>{val.title}</h2>
                          <p>{val.author}</p>
                        </span>
                        <span>
                          <button onClick={() => deleteBook(val.id)}>
                            delete
                          </button>
                          <Link to={`/update/${val.id}`} className="nav-link">
                            update
                          </Link>
                        </span>
                      </li>
                    </Fragment>
                  );
                })}
              </ul>
            )}
          </aside>
        </div>
      </article>
    </section>
  );
};

export default AllBooks;
