import React, { useCallback, useEffect, useState } from "react";
import { IoFilterSharp } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import { userTableHeader } from "../data";
import { Popover, Transition, Listbox } from "@headlessui/react";
import { getAllUsers } from "../services/api";
import Pagination from "./Pagination";
import { FaChevronDown } from "react-icons/fa6";


const pageSizes = [10, 25, 50, 75, 100];

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [pageSize, setPageSize] = useState(pageSizes[0]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const onPageChange = useCallback((page: number) => {
    setCurrentPage(page);
    const primaryView = document.querySelector(".primary-view");
    if (primaryView !== null) {
      window.scrollTo(0, primaryView.scrollHeight);
    }
  }, []);

  useEffect(() => {
    getAllUsers()
      .then((res) => {
        setUsers(res.data);
        console.log(users);
      })
      .catch((err) => console.log(err, "err"));
  }, [users]);
  return (
    <>
      <div className="usertable-container">
        <table>
          <tr>
            {userTableHeader.map((item, index) => (
              <th key={index}>
                {/* <span>{item}</span> <IoFilterSharp /> */}
                <Popover style={{ position: "relative" }}>
                  {() => (
                    <>
                      <Popover.Button as="span">
                        <span>{item}</span>
                        <IoFilterSharp />
                      </Popover.Button>
                      <Transition>
                        <Popover.Panel className="popover-panel">
                          <div className="filter-container">
                            <form>
                              <label
                                htmlFor="organization"
                                className="form-label"
                              >
                                Organization
                              </label>
                              <Listbox value={""} onChange={() => {}}>
                                <Listbox.Button className="form-control select-button">
                                  <span>Select</span>
                                  <FaChevronDown fillOpacity="0.2" />
                                </Listbox.Button>
                              </Listbox>

                              <label htmlFor="userName" className="form-label">
                                Username
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="User"
                              />

                              <label htmlFor="email" className="form-label">
                                Email
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                placeholder="Email"
                              />

                              <label htmlFor="date" className="form-label">
                                Date
                              </label>
                              <input
                                type="text"
                                onFocus={(e) => (e.target.type = "date")}
                                onBlur={(e) => (e.target.type = "text")}
                                className="form-control"
                                placeholder="Date"
                              />

                              <label
                                htmlFor="phoneNumber"
                                className="form-label"
                              >
                                Phone Number
                              </label>
                              <input
                                type="tel"
                                className="form-control"
                                placeholder="Phone Number"
                              />

                              <label htmlFor="status" className="form-label">
                                Status
                              </label>
                              <Listbox value={""} onChange={() => {}}>
                                <Listbox.Button className="form-control select-button">
                                  <span>Select</span>
                                  <FaChevronDown fillOpacity="0.2" />
                                </Listbox.Button>
                              </Listbox>

                              <div className="button-group">
                                <button>Reset</button>
                                <button>Filter</button>
                              </div>
                            </form>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>{" "}
              </th>
            ))}
          </tr>
          { users
            .slice(
              pageSize * (currentPage - 1),
              pageSize * currentPage + pageSize
            )
            ?.map((user: any, index: number) => {
              const formatDate = (dateString: string) => {
                const options: any = {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                };

                const formattedDate = new Date(dateString).toLocaleString(
                  "en-US",
                  options
                );
                return formattedDate;
              };
              const formattedDate = formatDate(user.createdAt);

              return (
                <tr key={index}>
                  <td>{user.orgName}</td>
                  <td>{user.userName}</td>
                  <td>{user.phoneNumber}</td>
                  <td>{formattedDate}</td>
                  <td>{"Active"}</td>
                  <td>
                    <BsThreeDotsVertical />
                  </td>
                </tr>
              );
            })}
        </table>
      </div>
      <div className="pagination-container">
        <span>
          Showing{" "}
          <Listbox value={pageSize} onChange={setPageSize}>
            <div className="per-page-picker-container">
              <Listbox.Button className="per-page-picker-button">
                <span className="">{pageSize}</span>
                <FaChevronDown />
              </Listbox.Button>
              <Transition
                // as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="per-page-options">
                  {pageSizes.map((perPage) => (
                    <Listbox.Option key={perPage} className="" value={perPage}>
                      {() => (
                        <>
                          <span className="">{perPage}</span>
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>{" "}
          out of 100
        </span>
        <Pagination
          onPageChange={onPageChange}
          totalCount={users?.length}
          currentPage={currentPage}
          pageSize={pageSize}
        />
      </div>
    </>
  );
};

export default UserTable;
