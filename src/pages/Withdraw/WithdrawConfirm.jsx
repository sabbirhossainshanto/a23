import { useState } from "react";
import WithdrawSuccess from "../../components/modal/WithdrawSuccess";
import axios from "axios";
import { API } from "../../api";
import handleRandomToken from "../../utils/handleRandomToken";
import useContextState from "../../hooks/useContextState";
import toast from "react-hot-toast";
import { images } from "../../assets";

const WithdrawConfirm = ({ bank, amount, setAmount, setShowBankAccount,setConfirmWithdraw,setBank }) => {
  const [withdrawSuccess, setWithdrawSuccess] = useState(false);
  const { token } = useContextState();
  const handleCoinSubmit = async (e) => {
    e.preventDefault();
    if (amount?.length > 0 && bank) {
      const generatedToken = handleRandomToken();
      const bankData = {
        type: "withdrawCoins",
        amount: amount,
        bankId: bank?.bankId,
        token: generatedToken,
      };

      const res = await axios.post(API.bankAccount, bankData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = res?.data;

      if (data?.success) {
        toast.success(data?.result?.message);
        setWithdrawSuccess(true);
      } else {
        toast.error(data?.error?.errorMessage);
      }
    }
  };
  return (
    <>
      <div className="withdraw-account">
        <div
          onClick={() => {
            setAmount("");
            setShowBankAccount(false);
            setConfirmWithdraw(false)
            setBank('')
          }}
          className="back-nav-bc "
        >
          <img loading="lazy" src={images.backArrow} alt="" className="" />
          <span className="back-nav-title-bc ellipsis ">
            Back to Select Account
          </span>
        </div>
        <div className="withdraw-amount ">
          <span className="">Withdrawal Amount</span>
          <div className="edit-logo">
            <img loading="lazy" src="assets/img/edit.svg" alt="" className="" />
          </div>
        </div>
        <input
          type="text"
          name=""
          className=""
          defaultValue={amount}
          disabled
        />
        <div className="bank-account ">
          <span className="">Bank Account</span>
          <div className="edit-logo ">
            <img loading="lazy" src="assets/img/edit.svg" alt="" className="" />
          </div>
        </div>
        <div className="bank-card1 ">
          <div className="bank-logo1 ">
            <div className="logo ">
              <img
                loading="lazy"
                alt=""
                className=""
                src="https://s3.ap-south-1.amazonaws.com/cdn.mac1j.com/gstatic/bankIcons/AXIX_BANK.svg"
              />
              <p className="">{bank?.bankName}</p>
            </div>
          </div>
          <div className="bank-inner-box ">
            <div className="bank-detail ">
              <div
                style={{
                  width: "max-content",
                  display: "flex",
                  flexDirection: "row",
                }}
                className=""
              >
                <span className="">Bank :-</span>
                <span style={{ marginLeft: "0.2rem" }} className="">
                  {bank?.bankName}
                </span>
              </div>
            </div>
            <div className="bank-detail ">
              <div
                style={{
                  width: "max-content",
                  display: "flex",
                  flexDirection: "row",
                }}
                className=""
              >
                <span className="">IFSC :-</span>
                <span style={{ marginLeft: "0.2rem" }} className="">
                  {bank?.ifsc}
                </span>
              </div>
            </div>
            <div className="bank-detail ">
              <div
                style={{
                  width: "max-content",
                  display: "flex",
                  flexDirection: "row",
                }}
                className=""
              >
                <span className="">Account No :-</span>
                <span className="bank-detail-txt "> {bank?.accountNumber}</span>
              </div>
            </div>
          </div>
        </div>
        <button onClick={handleCoinSubmit} className="proceed-btn ">
          <span className="">Proceed</span>
        </button>
      </div>
      {withdrawSuccess && <WithdrawSuccess setWithdrawSuccess={setWithdrawSuccess} />}
    </>
  );
};

export default WithdrawConfirm;