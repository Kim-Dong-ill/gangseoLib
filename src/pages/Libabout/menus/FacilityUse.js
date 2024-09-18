import SwiperComponent from "../../../components/Contents/SwiperComponent";
import { SubBackWrap } from "../../../components/Layout/BackWrap";
import { SubTopMenu } from "../../../components/Layout/TopMenu";
import FacilityUseData from "../datas/FacilityUse/FacilityUseData";
import FloorData from "../datas/FacilityUse/FloorData";
const pageData = [
    {
        title: "시설 개요",
        description: "시설에 대한 설명입니다.",
        ContentsData: <FacilityUseData />,
    },
    {
        title: "층별 안내",
        description: "층별에 대한 설명입니다.",
        ContentsData: <FloorData />,
    },
];
const tabs = ["시설 개요", "층별 안내"];

function FacilityUse() {
    return (
        <SubBackWrap>
            <SubTopMenu />
            <div className="subContentWrap">
                {/* <TabContents></TabContents> */}
                <SwiperComponent
                    mainTitle={"시설 이용 안내"}
                    tabs={tabs}
                    data={pageData}
                />
                {/* <UseingInfo /> */}
            </div>
        </SubBackWrap>
    );
}

export default FacilityUse;
