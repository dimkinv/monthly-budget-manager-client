export const Collapsible: React.FC<CollapsibleProps> = ({direction}) => (
    <svg style={{transform: directionOptions[direction],  transition: 'transform 0.2s ease-in-out' }} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_2_76)">
            <path
                d="M7.29375 12.7062C7.68438 13.0969 8.31875 13.0969 8.70938 12.7062L14.7094 6.70624C15.1 6.31562 15.1 5.68124 14.7094 5.29062C14.3188 4.89999 13.6844 4.89999 13.2938 5.29062L8 10.5844L2.70625 5.29374C2.31563 4.90312 1.68125 4.90312 1.29063 5.29374C0.900002 5.68437 0.900002 6.31874 1.29063 6.70937L7.29063 12.7094L7.29375 12.7062Z"
                fill="#A3A3A3" />
        </g>
        <defs>
            <clipPath id="clip0_2_76">
                <rect width="16" height="16" fill="white" />
            </clipPath>
        </defs>
    </svg>
)

export type CollapsibleProps = {
    direction: 'up' | 'down' | 'left' | 'right';
};

const directionOptions = {
    'up': 'rotate(180deg)',
    'down': 'rotate(0deg)',
    'left': 'rotate(90deg)',
    'right': 'rotate(270deg)'
}