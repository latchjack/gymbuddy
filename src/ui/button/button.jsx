import Button from '../../ui-lib/button';

function PrimaryButton({ label, ...restProps }) {
    return <Button classNames="bg-blue-300" label={label} {...restProps} />;
}

export default PrimaryButton;
