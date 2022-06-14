import AtomButton from "@atoms/AtomButton";

type Props = {};

const index = (props: Props) => {
  return (
    <div>
      <AtomButton as="primary" asType="outline">
        <span>Text Primary</span>
      </AtomButton>
    </div>
  );
};

export default index;
