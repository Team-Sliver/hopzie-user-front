import { searchPageState } from "@/recoil/make/serch-page-data"
import { Button } from "@nextui-org/react"
import { useState } from "react"
import { useRecoilState } from "recoil"

export function SearchSection({
    placeholder,
    icon,
    endIcon,
}: {
    placeholder: string
    icon: string
    endIcon : string,
}) {
    const [searchText, setsearchText] = useState('');
    const [searchRecoilText, setsearchRecoilText] = useRecoilState(searchPageState);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            setsearchRecoilText(searchText)
        }
    };

    return (
        <div className="flex flex-row items-center justify-center w-full mt-[0px] mb-8">
            <form
                className="flex w-full"
                style={{ position: 'relative', width: '100%' }}
                >
                     <div
                        style={{
                            position: 'absolute',
                            left: '10px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                        }}
                        >
                        <img
                            src={icon}
                            alt="Icon"
                            className="h-[16px] w-[16px] opacity-40"
                        />
                    </div>
                        <input
                            type="text"
                            className="linkText w-full h-[36px] pl-[35px] pr-[6px] pt-[6px] pb-[6px]"
                            onChange={(e) => {
                                setsearchText(e.target.value)
                                if(e.target.value === '') {
                                    setsearchRecoilText('')
                                }
                            }}
                            onKeyDown={handleKeyDown}
                            style={{
                                borderRadius: '100px',
                                borderColor: '#D0D7DE',
                                borderWidth: '1px',
                            }}
                            placeholder={placeholder}
                            value={searchText}
                            required
                        />
                     <Button
                        isIconOnly
                        size="sm"
                        onClick={() => {
                            setsearchText('')
                            setsearchRecoilText('')
                        }}
                        style={{
                            backgroundColor: '#FFFFFF',
                            position: 'absolute',
                            right: '12px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                        }}
                        >
                        <img
                            src={endIcon}
                            alt="Icon"
                            className="h-[20px] w-[20px]"
                        />
                    </Button>
            </form>
        </div>
    )
}