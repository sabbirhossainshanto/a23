import { useNavigate } from "react-router-dom";
import useDepositStatement from "../../hooks/useDepositStatement";

const DepositReport = () => {
  const { accountStatement } = useDepositStatement();
  const navigate = useNavigate();
  return (
    <>
      <div className="main-content  ">
        {accountStatement?.length > 0 ? (
          accountStatement?.map((data, i) => {
            return (
              <div
                onClick={() => {
                  navigate(`/deposit-withdraw-report/${data?.referenceNo}`);
                }}
                key={i}
              >
                <span className="date-separator  "> {data?.date}</span>
                <div className="card-deposit  ">
                  <div className="logo ">
                    {data?.image && (
                      <img
                        src={data?.image}
                        alt="logo"
                        className="bank-logo  "
                      />
                    )}
                  </div>
                  <div className="card-content ">
                    <div className="top-content ">
                      <div className="left-top-text ">
                        <span className="">
                          Deposit Via <span className=" ">WIZPAY</span>
                        </span>
                        <span className="status  status-aproved">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="10"
                            height="10"
                            viewBox="0 0 10 10"
                            fill="none"
                            className=" "
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.76142 0 10 2.23858 10 5C10 7.76142 7.76142 10 5 10ZM0.78125 5C0.78125 7.32995 2.67005 9.21875 5 9.21875C7.32995 9.21875 9.21875 7.32995 9.21875 5C9.21875 2.67005 7.32995 0.78125 5 0.78125C2.67005 0.78125 0.78125 2.67005 0.78125 5ZM4.58968 6.58651C4.43713 6.73906 4.1898 6.73906 4.03725 6.58651L2.78973 5.33901C2.63718 5.18647 2.63718 4.93914 2.78973 4.78659C2.94228 4.63404 3.1896 4.63403 3.34215 4.78658L4.31346 5.75787L6.65784 3.4135C6.81038 3.26095 7.05771 3.26095 7.21026 3.4135C7.36281 3.56605 7.36281 3.81338 7.21026 3.96592L4.58968 6.58651Z"
                              fill="#17C964"
                              className=""
                            ></path>
                          </svg>
                          <span
                            className={`status-text ${
                              data?.status === "APPROVED"
                                ? "status-text-approved"
                                : ""
                            } ${
                              data?.status === "REJECTED"
                                ? "status-text-rejected"
                                : ""
                            } ${
                              data?.status === "PENDING"
                                ? "status-text-pending"
                                : ""
                            }`}
                          >
                            {data?.status}
                          </span>
                        </span>
                      </div>
                      <span className="right-top-amount  right-top-amount-approved">
                        {" "}
                        ₹ {data?.amount}{" "}
                      </span>
                    </div>
                    <div className="bottom-content ">
                      <span className="left-bottom-id ">
                        {" "}
                        {data?.referenceNo}{" "}
                      </span>
                      <span className="right-bottom-date "> {data?.date} </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="no-data ng-star-inserted">
            <p>No transaction yet!</p>
          </div>
        )}
      </div>
    </>
  );
};

export default DepositReport;
