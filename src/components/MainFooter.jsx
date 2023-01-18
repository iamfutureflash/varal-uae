import { FooterData, SubscribeNow, Address, Social_links } from "../constants"

function MainFooter() {
    return (
        <section className='main-container  '>
            <div className="sub-container flex flex-row justify-between flex-wrap md:flex-col gap-4 min-w-[200px] max-w-[700px] md:max-w-[400px] ">
                <div className="border-l-4 border-primary my-4 hidden md:block">
                    <h2 className="ml-4 font-lexend font-semibold text-xl ">Get to know the whole us and more of our services</h2>
                </div>
                <div className="footer-links  flex flex-row flex-wrap justify-evenly md:flex-col max-w-[500px] mt-4 md:mt-0 ">
                    {FooterData.map((data) => (
                        <div className="mb-6 min-w-[200px]">
                            <div className="title font-lexend font-medium text-lg  my-2">{data.title}</div>
                            <ul className="sub-links space-y-1 max-w-[150px] md:max-w-[300px] ">
                                {data.links.map((link) => (
                                    <li className="link font-noto font-medium text-lg text-slate-500 hover:text-black hover:underline">{link.name}</li>
                                ))
                                }
                            </ul>
                        </div>
                    ))}
                    <div className="address-container md:hidden xxs:mt-0  xs:-mt-16">
                        <div className="sub-address-container space-y-2">
                            {Address.map((address) => (
                                <>
                                    <div className="address-title">
                                        <h4 className="font-lexend font-medium text-lg text-black ">{address.title}</h4>
                                    </div>
                                    <div className="complete-address max-w-[200px]">
                                        {address.Address.map((street_address) => (
                                            <>
                                                <p className="font-noto font-medium text-base text-slate-500 ]">
                                                    {street_address.street_address.substring(0, 31)} <br />
                                                    {street_address.street_address.substring(31, 59)} <br />
                                                    {street_address.street_address.substring(59, 71)} <br />
                                                    {street_address.street_address.substring(71, 77)} <br />
                                                    {street_address.street_address.substring(77)}
                                                </p>
                                            </>
                                        ))}
                                    </div>
                                    <div className="complete-office-address py-4 hidden md:block">
                                        {address.office_hours.map((office_hours) => (
                                            <>
                                                <p className=" font-noto text-base font-medium text-slate-500">{office_hours.title}{" "}{office_hours.time.substring(0, 10)} <br /> {office_hours.time.substring(11)} </p>
                                                <div>
                                                    {
                                                        office_hours.phone_number.map((phone_number) => (
                                                            <>
                                                                <div className="flex flex-row space-x-1">
                                                                    <p className=" font-noto text-base font-medium text-slate-500">{phone_number.phone_location}</p>
                                                                    <p className=" font-noto text-base font-medium text-slate-500">{phone_number.phone_number_1}</p>
                                                                </div>
                                                            </>
                                                        ))
                                                    }
                                                </div>
                                            </>
                                        ))}
                                    </div>
                                    <div></div>
                                </>
                            ))}
                        </div>
                    </div>
                    <div className="subscribe-now md:hidden overflow-x-scroll">
                        {SubscribeNow.map((subscribe_now) => (
                            <>
                                <div className="subscribe-now-title">
                                    <h4 className="font-lexend font-medium text-xl my-4 hidden md:block">{subscribe_now.title1}</h4>
                                    <h4 className="font-lexend font-medium text-xl my-4 md:hidden max-w-[200px]">{subscribe_now.title2}</h4>
                                    <h4 className="font-noto font-medium text-base text-slate-500 hidden md:block">{subscribe_now.Subscribe_now_desc}</h4>
                                    <div className="email flex  my-4">
                                        <input type="email" name="email_address" id="" placeholder="Enter email address" className="ml-1  placeholder:pl-4 placeholder:pr-4 placeholder:py-4 placeholder:font-noto " />
                                        <img src={subscribe_now.icon} alt="" className="w-12 h-12" />
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>
                    <div className="social-media  my-4 py-4 md:hidden">
                        <ul className="flex flex-row gap-4 ">
                            {Social_links.map((link) => (
                                <li className=""><img src={link.icon} alt="" className="hover:shadow-2xl hover:scale-110" /></li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="address-container hidden md:block">
                    <div className="sub-address-container space-y-2">
                        {Address.map((address) => (
                            <>
                                <div className="address-title">
                                    <h4 className="font-lexend font-medium text-lg text-black ">{address.title}</h4>
                                </div>
                                <div className="complete-address max-w-[200px] md:max-w-[300px]">
                                    {address.Address.map((street_address) => (
                                        <>
                                            <p className="font-noto font-medium text-base text-slate-500 ]">
                                                {street_address.street_address.substring(0, 31)} <br />
                                                {street_address.street_address.substring(31, 59)} <br />
                                                {street_address.street_address.substring(59, 71)} <br />
                                                {street_address.street_address.substring(71, 77)} <br />
                                                {street_address.street_address.substring(77)}
                                            </p>
                                        </>
                                    ))}
                                </div>
                                <div className="complete-office-address py-4 hidden md:block">
                                    {address.office_hours.map((office_hours) => (
                                        <>
                                            <p className=" font-noto text-base font-medium text-slate-500">{office_hours.title}{" "}{office_hours.time.substring(0, 10)} <br /> {office_hours.time.substring(11)} </p>
                                            <div>
                                                {
                                                    office_hours.phone_number.map((phone_number) => (
                                                        <>
                                                            <div className="flex flex-row space-x-1">
                                                                <p className=" font-noto text-base font-medium text-slate-500">{phone_number.phone_location}</p>
                                                                <p className=" font-noto text-base font-medium text-slate-500">{phone_number.phone_number_1}</p>
                                                            </div>
                                                        </>
                                                    ))
                                                }
                                            </div>
                                        </>
                                    ))}
                                </div>
                                <div></div>
                            </>
                        ))}
                    </div>
                </div>
                <div className="subscribe-now hidden md:block">
                    {SubscribeNow.map((subscribe_now) => (
                        <>
                            <div className="subscribe-now-title">
                                <h4 className="font-lexend font-medium text-xl my-4 hidden md:block">{subscribe_now.title1}</h4>
                                <h4 className="font-lexend font-medium text-xl my-4 md:hidden max-w-[200px]">{subscribe_now.title2}</h4>
                                <h4 className="font-noto font-medium text-base text-slate-500 hidden md:block max-w-[300px] subscribe_desc_word_spacing ">{subscribe_now.Subscribe_now_desc}</h4>
                                <div className="email flex  my-4">
                                    <input type="email" name="email_address" id="" placeholder="Enter email address" className="ml-1  placeholder:pl-4 placeholder:pr-4 placeholder:py-4 placeholder:font-noto " />
                                    <img src={subscribe_now.icon} alt="" className="w-12 h-12" />
                                </div>
                            </div>
                        </>
                    ))}
                </div>
                <div className="social-media  my-4 py-4 hidden md:block">
                    <ul className="flex flex-row gap-8 ">
                        {Social_links.map((link) => (
                            <li className=""><img src={link.icon} alt="" className="hover:shadow-2xl hover:scale-110" /></li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default MainFooter