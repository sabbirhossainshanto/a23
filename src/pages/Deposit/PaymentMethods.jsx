import axios from "axios";
import { depositMethodsPost } from "../../constant/constant";
import useBankAccount from "../../hooks/useBankAccount";
import { API } from "../../api";
import handleRandomToken from "../../utils/handleRandomToken";
import { useState } from "react";
import useContextState from "../../hooks/useContextState";
import contactOne from '../../../src/assets/img/contact_one.svg'
import clipboardIcon from '../../../src/assets/img/clipboard_icon.svg'
import contactTwo from '../../../src/assets/img/contact_two.svg'
import codeBlock from '../../../src/assets/img/code_block.svg'
import institution from '../../../src/assets/img/institution.svg'

/* eslint-disable react/no-unknown-property */
const PaymentMethods = ({ setUploadTransaction,
    setPaymentMethods,setPaymentId}) => {
  const { token } = useContextState();
  const { bankData: depositMethods } = useBankAccount(depositMethodsPost);
  const [tabs, setTabs] = useState("");

  const [depositData, setDepositData] = useState({});

  const handleVisibleBankMethod = async (method) => {
    setTabs(method?.type);
    setPaymentId(method?.paymentId);
    const generatedToken = handleRandomToken();
    const depositDetail = {
      type: "depositDetails",
      paymentId: method?.paymentId,
      token: generatedToken,
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
  };
console.log(depositData);
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
          <div
            _ngcontent-kdb-c159=""
            className="accountdetailss ng-tns-c159-13 ng-star-inserted"
          >
            <div className="payment_container" style={{width:'100%'}}>
              {Array.isArray(depositMethods) &&
                depositMethods?.map((method) => {
                  return (
                    <div
                      onClick={() => handleVisibleBankMethod(method)}
                      key={method?.paymentId}
                      className="payment_box"
                    >
                      <img
                        src={`/img/${method?.type}.${
                          method?.type === "qr" ? "svg" : "png"
                        }`}
                      />
                      <h2> {method?.type?.toUpperCase()}</h2>
                    </div>
                  );
                })}

              {/*    <!-- Add more divs as needed --> */}
            </div>
          </div>
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
                     {depositData?.accountNumber
}
                    </p>
                    <p _ngcontent-kdb-c159="" className="svg ng-tns-c159-13">
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
                    <p _ngcontent-kdb-c159="" className="svg ng-tns-c159-13">
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
                    {depositData?.ifsc
}
                    </p>
                    <p _ngcontent-kdb-c159="" className="svg ng-tns-c159-13">
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
                     {depositData?.bankName
}
                    </p>
                    <p _ngcontent-kdb-c159="" className="svg ng-tns-c159-13">
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
            <div onClick={()=> {
                  setPaymentMethods(false)
                  setUploadTransaction(true)
                }} _ngcontent-kdb-c159="" className="makepayment ng-tns-c159-13" style={{marginTop:'10px'}}>
              <div _ngcontent-kdb-c159="" className="madepay ng-tns-c159-13">
                <button  _ngcontent-kdb-c159="" className="ng-tns-c159-13">
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
