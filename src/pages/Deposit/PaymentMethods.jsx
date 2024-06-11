import axios from "axios";
import { depositMethodsPost } from "../../constant/constant";
import useBankAccount from "../../hooks/useBankAccount";
import { API, Settings } from "../../api";
import handleRandomToken from "../../utils/handleRandomToken";
import { useState } from "react";
import useContextState from "../../hooks/useContextState";
import contactOne from "../../../src/assets/img/contact_one.svg";
import clipboardIcon from "../../../src/assets/img/clipboard_icon.svg";
import contactTwo from "../../../src/assets/img/contact_two.svg";
import codeBlock from "../../../src/assets/img/code_block.svg";
import institution from "../../../src/assets/img/institution.svg";
import { handleCopyToClipBoard } from "../../utils/handleCopyToClipBoard";
import { FaQrcode } from "react-icons/fa";
import { CiBank } from "react-icons/ci";
import { images } from "../../assets";
import toast from "react-hot-toast";

/* eslint-disable react/no-unknown-property */
const PaymentMethods = ({
  setUploadTransaction,
  setPaymentMethods,
  setPaymentId,
  amount,
}) => {
  const { token } = useContextState();
  const { bankData: depositMethods } = useBankAccount(depositMethodsPost);
  const [tabs, setTabs] = useState("");

  const [depositData, setDepositData] = useState({});

  const handleVisibleBankMethod = async (method) => {
    setTabs(method?.type);
    setPaymentId(method?.paymentId);
    const generatedToken = handleRandomToken();

    if (method?.type === "pg") {
      const depositDetailForPg = {
        paymentId: method?.paymentId,
        token: generatedToken,
        site: Settings.siteUrl,
        amount,
      };
      const res = await axios.post(API.pg, depositDetailForPg, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = res?.data;
      if (data?.success) {
        window.open(data?.result?.link, "_blank");
      } else {
        toast.error(data?.result?.message);
      }
    } else {
      const depositDetail = {
        type: "depositDetails",
        paymentId: method?.paymentId,
        token: generatedToken,
        site: Settings.siteUrl,
      };
      const res = await axios.post(API.bankAccount, depositDetail, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = res?.data;
      if (data?.success) {
        setDepositData(data?.result);
      }
    }
  };

  return (
    <>
      <div _ngcontent-kdb-c159="" className="paymethod ng-tns-c159-13">
        <div _ngcontent-kdb-c159="" className="accountdetail ng-tns-c159-13">
          <p
            _ngcontent-kdb-c159=""
            className="make ng-tns-c159-13"
            style={{ marginBottom: "0.75rem", color: "black" }}
          >
            Payment Methods
          </p>

          {Array.isArray(depositMethods) && depositMethods?.length > 0 ? (
            depositMethods?.map((method) => {
              return (
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => handleVisibleBankMethod(method)}
                  key={method?.paymentId}
                  _ngcontent-kdb-c159=""
                  class="accountdetailss  "
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                    class="payment_container"
                  >
                    <span>{method?.type?.toUpperCase()}</span>
                    {method?.type == "qr" && (
                      <FaQrcode size={20} color="gray" />
                    )}
                    {method?.type == "bank" && (
                      <CiBank size={20} color="gray" />
                    )}
                    {method?.type == "upi" || method?.type == "pg" ? (
                      <img
                        style={{ height: "20px", width: "20px" }}
                        src={images.upi}
                      />
                    ) : null}
                  </div>
                </div>
              );
            })
          ) : (
            <h2>No payment method available right now.</h2>
          )}

          {/*    <!-- Add more divs as needed --> */}
        </div>
      </div>

      {tabs === "bank" && (
        <div _ngcontent-kdb-c159="" className="paymethod ng-tns-c159-13">
          <div _ngcontent-kdb-c159="" className="accountdetail ng-tns-c159-13">
            <p
              _ngcontent-kdb-c159=""
              className="make ng-tns-c159-13"
              style={{ marginBottom: "0.75rem", color: "black" }}
            >
              Use below details to make payment
            </p>
            <div
              _ngcontent-kdb-c159=""
              className="accountdetailss ng-tns-c159-13 ng-star-inserted"
            >
              <div _ngcontent-kdb-c159="" className="accountnum ng-tns-c159-13">
                <div
                  _ngcontent-kdb-c159=""
                  className="bankdetail ng-tns-c159-13"
                >
                  <img
                    _ngcontent-kdb-c159=""
                    loading="lazy"
                    src={contactOne}
                    alt=""
                    className="ng-tns-c159-13"
                  />
                </div>
                <div _ngcontent-kdb-c159="" className="banknum ng-tns-c159-13">
                  {" "}
                  Account Number{" "}
                  <div _ngcontent-kdb-c159="" className="icon ng-tns-c159-13">
                    <p
                      _ngcontent-kdb-c159=""
                      className="accnum account-number ng-tns-c159-13"
                    >
                      {depositData?.accountNumber}
                    </p>
                    <p
                      onClick={() =>
                        handleCopyToClipBoard(depositData?.accountNumber)
                      }
                      style={{ cursor: "pointer" }}
                      _ngcontent-kdb-c159=""
                      className="svg ng-tns-c159-13"
                    >
                      <img
                        _ngcontent-kdb-c159=""
                        loading="lazy"
                        src={clipboardIcon}
                        alt=""
                        className="ng-tns-c159-13"
                      />
                    </p>
                  </div>
                </div>
              </div>
              <div _ngcontent-kdb-c159="" className="accountnum ng-tns-c159-13">
                <div
                  _ngcontent-kdb-c159=""
                  className="bankdetail ng-tns-c159-13"
                >
                  <img
                    _ngcontent-kdb-c159=""
                    loading="lazy"
                    src={contactTwo}
                    alt=""
                    className="ng-tns-c159-13"
                  />
                </div>
                <div _ngcontent-kdb-c159="" className="banknum ng-tns-c159-13">
                  {" "}
                  Account Name{" "}
                  <div _ngcontent-kdb-c159="" className="icon ng-tns-c159-13">
                    <p
                      _ngcontent-kdb-c159=""
                      className="accnum account-name ng-tns-c159-13"
                    >
                      {depositData?.accountName}
                    </p>
                    <p
                      onClick={() =>
                        handleCopyToClipBoard(depositData?.accountName)
                      }
                      style={{ cursor: "pointer" }}
                      _ngcontent-kdb-c159=""
                      className="svg ng-tns-c159-13"
                    >
                      <img
                        _ngcontent-kdb-c159=""
                        loading="lazy"
                        src={clipboardIcon}
                        alt=""
                        className="ng-tns-c159-13"
                      />
                    </p>
                  </div>
                </div>
              </div>
              <div _ngcontent-kdb-c159="" className="accountnum ng-tns-c159-13">
                <div
                  _ngcontent-kdb-c159=""
                  className="bankdetail ng-tns-c159-13"
                >
                  <img
                    _ngcontent-kdb-c159=""
                    loading="lazy"
                    src={codeBlock}
                    alt=""
                    className="ng-tns-c159-13"
                  />
                </div>
                <div _ngcontent-kdb-c159="" className="banknum ng-tns-c159-13">
                  {" "}
                  IFSC{" "}
                  <div _ngcontent-kdb-c159="" className="icon ng-tns-c159-13">
                    <p
                      _ngcontent-kdb-c159=""
                      className="accnum ifsc-code ng-tns-c159-13"
                    >
                      {depositData?.ifsc}
                    </p>
                    <p
                      onClick={() => handleCopyToClipBoard(depositData?.ifsc)}
                      style={{ cursor: "pointer" }}
                      _ngcontent-kdb-c159=""
                      className="svg ng-tns-c159-13"
                    >
                      <img
                        _ngcontent-kdb-c159=""
                        loading="lazy"
                        src={clipboardIcon}
                        alt=""
                        className="ng-tns-c159-13"
                      />
                    </p>
                  </div>
                </div>
              </div>
              <div _ngcontent-kdb-c159="" className="accountnum ng-tns-c159-13">
                <div
                  _ngcontent-kdb-c159=""
                  className="bankdetail ng-tns-c159-13"
                >
                  <img
                    _ngcontent-kdb-c159=""
                    loading="lazy"
                    src={institution}
                    alt=""
                    className="ng-tns-c159-13"
                  />
                </div>
                <div _ngcontent-kdb-c159="" className="banknum ng-tns-c159-13">
                  {" "}
                  Bank Name{" "}
                  <div _ngcontent-kdb-c159="" className="icon ng-tns-c159-13">
                    <p
                      _ngcontent-kdb-c159=""
                      className="accnum bank-name ng-tns-c159-13"
                    >
                      {depositData?.bankName}
                    </p>
                    <p
                      onClick={() =>
                        handleCopyToClipBoard(depositData?.bankName)
                      }
                      style={{ cursor: "pointer" }}
                      _ngcontent-kdb-c159=""
                      className="svg ng-tns-c159-13"
                    >
                      <img
                        _ngcontent-kdb-c159=""
                        loading="lazy"
                        src={clipboardIcon}
                        alt=""
                        className="ng-tns-c159-13"
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              onClick={() => {
                setPaymentMethods(false);
                setUploadTransaction(true);
              }}
              _ngcontent-kdb-c159=""
              className="makepayment ng-tns-c159-13"
              style={{ marginTop: "10px" }}
            >
              <div _ngcontent-kdb-c159="" className="madepay ng-tns-c159-13">
                <button _ngcontent-kdb-c159="" className="ng-tns-c159-13">
                  I have Made The Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {tabs === "upi" && (
        <div _ngcontent-kdb-c159="" className="paymethod ng-tns-c159-13">
          <div _ngcontent-kdb-c159="" className="accountdetail ng-tns-c159-13">
            <p
              _ngcontent-kdb-c159=""
              className="make ng-tns-c159-13"
              style={{ marginBottom: "0.75rem", color: "black" }}
            >
              Use below details to make payment
            </p>
            <div
              _ngcontent-kdb-c159=""
              className="accountdetailss ng-tns-c159-13 ng-star-inserted"
            >
              {/* <div _ngcontent-kdb-c159="" className="accountnum ng-tns-c159-13">
                <div
                  _ngcontent-kdb-c159=""
                  className="bankdetail ng-tns-c159-13"
                >
                  <img
                    _ngcontent-kdb-c159=""
                    loading="lazy"
                    src={contactOne}
                    alt=""
                    className="ng-tns-c159-13"
                  />
                </div>
                <div _ngcontent-kdb-c159="" className="banknum ng-tns-c159-13">
                  {" "}
                  Account Number{" "}
                  <div _ngcontent-kdb-c159="" className="icon ng-tns-c159-13">
                    <p
                      _ngcontent-kdb-c159=""
                      className="accnum account-number ng-tns-c159-13"
                    >
                      {depositData?.accountNumber}
                    </p>
                    <p
                      onClick={() =>
                        handleCopyToClipBoard(depositData?.accountNumber)
                      }
                      style={{ cursor: "pointer" }}
                      _ngcontent-kdb-c159=""
                      className="svg ng-tns-c159-13"
                    >
                      <img
                        _ngcontent-kdb-c159=""
                        loading="lazy"
                        src={clipboardIcon}
                        alt=""
                        className="ng-tns-c159-13"
                      />
                    </p>
                  </div>
                </div>
              </div> */}
              <div _ngcontent-kdb-c159="" className="accountnum ng-tns-c159-13">
                <div
                  _ngcontent-kdb-c159=""
                  className="bankdetail ng-tns-c159-13"
                >
                  <img
                    _ngcontent-kdb-c159=""
                    loading="lazy"
                    src={contactTwo}
                    alt=""
                    className="ng-tns-c159-13"
                  />
                </div>
                <div _ngcontent-kdb-c159="" className="banknum ng-tns-c159-13">
                  {" "}
                  Display Name{" "}
                  <div _ngcontent-kdb-c159="" className="icon ng-tns-c159-13">
                    <p
                      _ngcontent-kdb-c159=""
                      className="accnum account-name ng-tns-c159-13"
                    >
                      {depositData?.upiAccountName}
                    </p>
                    <p
                      onClick={() =>
                        handleCopyToClipBoard(depositData?.upiAccountName)
                      }
                      style={{ cursor: "pointer" }}
                      _ngcontent-kdb-c159=""
                      className="svg ng-tns-c159-13"
                    >
                      <img
                        _ngcontent-kdb-c159=""
                        loading="lazy"
                        src={clipboardIcon}
                        alt=""
                        className="ng-tns-c159-13"
                      />
                    </p>
                  </div>
                </div>
              </div>
              <div _ngcontent-kdb-c159="" className="accountnum ng-tns-c159-13">
                <div
                  _ngcontent-kdb-c159=""
                  className="bankdetail ng-tns-c159-13"
                >
                  <img
                    _ngcontent-kdb-c159=""
                    loading="lazy"
                    src={codeBlock}
                    alt=""
                    className="ng-tns-c159-13"
                  />
                </div>
                <div _ngcontent-kdb-c159="" className="banknum ng-tns-c159-13">
                  {" "}
                  UPI Details
                  <div _ngcontent-kdb-c159="" className="icon ng-tns-c159-13">
                    <p
                      _ngcontent-kdb-c159=""
                      className="accnum ifsc-code ng-tns-c159-13"
                    >
                      {depositData?.upiId}
                    </p>
                    <p
                      onClick={() => handleCopyToClipBoard(depositData?.upiId)}
                      style={{ cursor: "pointer" }}
                      _ngcontent-kdb-c159=""
                      className="svg ng-tns-c159-13"
                    >
                      <img
                        _ngcontent-kdb-c159=""
                        loading="lazy"
                        src={clipboardIcon}
                        alt=""
                        className="ng-tns-c159-13"
                      />
                    </p>
                  </div>
                </div>
              </div>
              {/* <div _ngcontent-kdb-c159="" className="accountnum ng-tns-c159-13">
                <div
                  _ngcontent-kdb-c159=""
                  className="bankdetail ng-tns-c159-13"
                >
                  <img
                    _ngcontent-kdb-c159=""
                    loading="lazy"
                    src={institution}
                    alt=""
                    className="ng-tns-c159-13"
                  />
                </div>
                <div _ngcontent-kdb-c159="" className="banknum ng-tns-c159-13">
                  {" "}
                  Bank Name{" "}
                  <div _ngcontent-kdb-c159="" className="icon ng-tns-c159-13">
                    <p
                      _ngcontent-kdb-c159=""
                      className="accnum bank-name ng-tns-c159-13"
                    >
                      {depositData?.bankName}
                    </p>
                    <p
                      onClick={() =>
                        handleCopyToClipBoard(depositData?.bankName)
                      }
                      style={{ cursor: "pointer" }}
                      _ngcontent-kdb-c159=""
                      className="svg ng-tns-c159-13"
                    >
                      <img
                        _ngcontent-kdb-c159=""
                        loading="lazy"
                        src={clipboardIcon}
                        alt=""
                        className="ng-tns-c159-13"
                      />
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
            <div
              onClick={() => {
                setPaymentMethods(false);
                setUploadTransaction(true);
              }}
              _ngcontent-kdb-c159=""
              className="makepayment ng-tns-c159-13"
              style={{ marginTop: "10px" }}
            >
              <div _ngcontent-kdb-c159="" className="madepay ng-tns-c159-13">
                <button _ngcontent-kdb-c159="" className="ng-tns-c159-13">
                  I have Made The Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {tabs === "qr" && (
        <div _ngcontent-kdb-c159="" className="paymethod ng-tns-c159-13">
          <div _ngcontent-kdb-c159="" className="accountdetail ng-tns-c159-13">
            <p
              _ngcontent-kdb-c159=""
              className="make ng-tns-c159-13"
              style={{
                marginBottom: "0.75rem",
                marginLeft: "10px",
                color: "black",
              }}
            >
              QR code for payment
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              _ngcontent-kdb-c159=""
              className="accountdetailss ng-tns-c159-13 ng-star-inserted"
            >
              <div
                _ngcontent-kdb-c159=""
                className="accountnum ng-tns-c159-13"
                style={{ width: "100%", justifyContent: "center" }}
              >
                <div
                  style={{
                    border: "3px solid #f2f2f2",
                    padding: "3px",
                    borderRadius: "4px",
                  }}
                  _ngcontent-kdb-c159=""
                  className="ng-tns-c159-13"
                >
                  <img
                    style={{ height: "250px", borderRadius: "4px" }}
                    _ngcontent-kdb-c159=""
                    loading="lazy"
                    src={depositData?.qrCodeLink}
                    alt=""
                    className="ng-tns-c159-13"
                  />
                </div>
                {depositData?.qrDisplayName && (
                  <div
                    _ngcontent-kdb-c159=""
                    className="banknum ng-tns-c159-13"
                  >
                    <span
                      style={{
                        display: "flex",
                        gap: "7px",
                        alignItems: "center",
                      }}
                    >
                      <img
                        _ngcontent-kdb-c159=""
                        loading="lazy"
                        src={contactOne}
                        alt=""
                        className="ng-tns-c159-13"
                      />{" "}
                      <span> Display Name </span>
                    </span>
                    <div _ngcontent-kdb-c159="" className="icon ng-tns-c159-13">
                      <p
                        _ngcontent-kdb-c159=""
                        className="accnum account-name ng-tns-c159-13"
                      >
                        {depositData?.qrDisplayName}
                      </p>
                      <p
                        onClick={() =>
                          handleCopyToClipBoard(depositData?.qrDisplayName)
                        }
                        style={{ cursor: "pointer" }}
                        _ngcontent-kdb-c159=""
                        className="svg ng-tns-c159-13"
                      >
                        <img
                          _ngcontent-kdb-c159=""
                          loading="lazy"
                          src={clipboardIcon}
                          alt=""
                          className="ng-tns-c159-13"
                        />
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div
              onClick={() => {
                setPaymentMethods(false);
                setUploadTransaction(true);
              }}
              _ngcontent-kdb-c159=""
              className="makepayment ng-tns-c159-13"
              style={{ marginTop: "10px" }}
            >
              <div _ngcontent-kdb-c159="" className="madepay ng-tns-c159-13">
                <button _ngcontent-kdb-c159="" className="ng-tns-c159-13">
                  I have Made The Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PaymentMethods;
