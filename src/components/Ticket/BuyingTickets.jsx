import React from "react";
import BreadCumb from "../Main/BreadCumb";
import StoreBoxInfo from "./StoreBoxInfo";
import Category from "../WorkGroup/Category";
import FrequentlyAskedQuestions from "./FrequentlyAskedQuestions";
import Cards from "./Cards";
import PaymentModal from "./PaymentModal";
const BuyingTickets = () => {
  // const dispatch= useDispatch()
  console.log("buyingTikets");
  return (
    // <body dir="rtl">
    <div>
      {/* <!-- ====== side bar starts here ==== --> */}
      {/* <LinkeSide/> */}

      {/* <!-- =====  buttons box ===== --> */}
      <Category />

      {/* <!-- ==== store box ==== --> */}
      <StoreBoxInfo />

      {/* <!-- bread cumb ===  --> */}
      <BreadCumb />
      {/* <!-- === bread cumb ends here === --> */}

      <main className="mt-5 bg-white border-0 shadow-none main-content lg:shadow-md lg:border">
        <Cards />

        {/* <!-- == FQS starts here == --> */}
        <FrequentlyAskedQuestions />
      </main>
      {/* <!-- === end of the page === --> */}

      {/* <!-- ==== social media button ====== --> */}

      {/* <!-- ==== scroll back to top button ===== --> */}

      {/* <!-- ========= --> */}

      {/* <SequenceInfo /> */}
      {/* <NewPaymentFormModal /> */}
      <PaymentModal />

      {/* <script>
      $("[data-input-text]").focus(function () {
        $(this)
          .siblings("label")
          .addClass(
            "-translate-y-[30px] text-gray-700 scale-[0.8] text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none"
          );
      });
      $("[data-input-text]").blur(function () {
        if ($(this).val().length == 0) {
          $(this)
            .siblings("label")
            .removeClass(
              "-translate-y-[30px] text-gray-700 scale-[0.8] text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none"
            );
        }
      });
      $("[data-input-text]").each(function () {
        if ($(this).val().length == 0) {
          $(this)
            .siblings("label")
            .removeClass(
              "-translate-y-[30px] text-gray-700 scale-[0.8] text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none"
            );
        } else {
          $(this)
            .siblings("label")
            .addClass(
              "-translate-y-[30px] text-gray-700 scale-[0.8] text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none"
            );
        }
      });
    </script>
    <script>
      function showSansModal() {
        $("#selectSansModal").show();
        $("body").css("overflow", "hidden");
      }
      function hideSansModal() {
        $("#selectSansModal").hide();
        $("body").css("overflow", "auto");
      }

      function pushBuyBtn(e) {
        e.preventDefault();
        showUserInsertData();
        // showSansModal();
      }

      function showUserInsertData() {
        $("#userInsertDataModal").show();
        $("body").css("overflow", "hidden");
      }
      function hideUserInsertData() {
        $("#userInsertDataModal").hide();
        $("body").css("overflow", "auto");
      }

      function showSelectBank() {
        $("#selectBankModal").show();
        $("body").css("overflow", "hidden");
      }
      function hideSelectBank() {
        $("#selectBankModal").hide();
        $("body").css("overflow", "auto");
      }
      function showBasket() {
        $("#basket").show();
        $("body").css("overflow", "hidden");
      }
      function hideBasket() {
        $("#basket").hide();
        $("body").css("overflow", "auto");
      }
    </script> */}

      {/* <script>
      $(`input.counter`).val(0);
      $(`span.counter`).text(0);

      $(".increase-button").click(function () {
        let id = $(this).attr("data-id");
        let element = $(`input.counter[data-id=${id}]`);
        let value = Number(element.val());

        element.val(value + 1);
        $(`span.counter[data-id=${id}]`).text(value + 1);
      });
      $(".decrease-button").click(function () {
        let id = $(this).attr("data-id");
        let element = $(`input.counter[data-id=${id}]`);
        let value = Number(element.val());
        if (value == 0) return;
        element.val(value - 1);
        $(`span.counter[data-id=${id}]`).text(value - 1);
      });
      $("[data-show-more]").click(function () {
        $(".reserve-box").removeClass("d-none");
        $(this).attr("disabled", true);
      });
      $("#more").click(function () {
        $("#sansList li").removeClass("hidden");
        $(this).addClass("hidden");
      });
    </script> */}
      {/* </body> */}
    </div>
  );
};

export default BuyingTickets;
