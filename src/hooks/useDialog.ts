import { useState } from 'react';

const useDialog = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleDialog = () => {
        setIsOpen(!isOpen);
    };

    return {
        isOpen,
        handleDialog
    };
};

export default useDialog;
