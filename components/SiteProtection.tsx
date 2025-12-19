import React, { useEffect } from 'react';

export const SiteProtection = () => {
    useEffect(() => {
        const preventDefault = (e: Event) => e.preventDefault();

        // Disable Context Menu (Right Click)
        window.addEventListener('contextmenu', preventDefault);

        // Disable Dragging Images
        window.addEventListener('dragstart', preventDefault);

        // Disable Keyboard Shortcuts
        const handleKeyDown = (e: KeyboardEvent) => {
            if (
                e.key === 'F12' ||
                (e.ctrlKey && e.shiftKey && e.key === 'I') || // Ctrl+Shift+I
                (e.ctrlKey && e.shiftKey && e.key === 'J') || // Ctrl+Shift+J
                (e.ctrlKey && e.key === 'U') || // Ctrl+U
                (e.ctrlKey && e.key === 'S') || // Ctrl+S (Save)
                (e.ctrlKey && e.key === 'P') // Ctrl+P (Print)
            ) {
                e.preventDefault();
            }
        };
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('contextmenu', preventDefault);
            window.removeEventListener('dragstart', preventDefault);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <style>{`
            body {
                user-select: none;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
            }
            img {
                pointer-events: none;
            }
        `}</style>
    );
};
