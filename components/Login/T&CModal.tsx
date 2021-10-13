import React, { FC } from "react";
import { Modal, Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import styled from "styled-components";

interface IProps {
  open: boolean;
  toggleTModal: () => void;
}

const OuterContainer = styled.View`
  height: 100%;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const InnerContainer = styled.View`
  background-color: #fff;
  height: 60%;
  width: 82%;
  border-radius: 11px;
  padding: 15px;
  border-color: #0195ff;
  border-width: 0.5px;
`;

const Close = styled.Text`
  text-align: right;
  padding: 5px;
`;

const T_CModal: FC<IProps> = ({ open, toggleTModal }) => {
  return (
    <Modal visible={open} animationType="fade" transparent={true}>
      <OuterContainer>
        <InnerContainer>
          <TouchableOpacity onPress={() => toggleTModal()}>
            <Close>x</Close>
          </TouchableOpacity>
          <ScrollView>
            <Text>
              Terms of Use PLEASE READ THESE TERMS AND CONDITIONS BEFORE ACCESSING COLLABORIZM.COM This page states the "Terms of Use" under which you (“you”) may use Collaborizm.com, which is an interactive on-line service operated by Relative
              Emotion Enterprises, Inc. (“us”), consisting of information services and content provided by us and other third parties (the “Site”). These Terms of Use include the Collaborizm.com Privacy Policy (as it may be amended from time to time
              by us) and form a binding agreement between you and us. Your access to or use of the Site indicates your acceptance of these Terms of Use. 1) Acceptable Use. The Site is designed to provide an online platform for the creation and
              sharing of materials, ideas and concepts, in connection with projects, among members of the Site. When you become a member of the Site, you may join projects on the Site’s collaboration areas (“Projects”) and post materials to your
              Projects. Materials that you post will be used by all the members of the Project (“Project Members”) to collaboratively create new ideas and concepts and to develop collaborative works, products or services. Your participation in a
              Project and your contribution, use and disclosure of the materials you and others post in the collaboration areas is subject to these Terms of Use. No other use of the Site or the Projects is intended or allowed. 2) Posting. a) Posting
              Rules: i) Any materials you post to the Projects (your “Materials”) may not contain: (i) URLs or links to web sites that compete with us; (ii) copyrighted material (unless you own the copyright or have the owner's permission to post the
              copyrighted material or otherwise have the right to post them); (iii) trade secrets (unless you own them or have the owner's permission to post them or otherwise have the right to post them); (iv) material that infringes on or
              misappropriates any other intellectual property rights, or violates the privacy or publicity rights of others; (v) anything that is sexually explicit, obscene, libelous, defamatory, threatening, harassing, abusive, or hateful; or (vi)
              anything that is embarrassing or offensive to another person or entity. ii) You may not use your Materials to: (i) impersonate another person, living or dead; (ii) post false, inaccurate or misleading information; (iii) post
              advertisements or solicitations of business requiring a monetary investment (including, but not limited to, franchises, "club memberships," distributorships, or payment to obtain job listings); (iv) post chain letters or pyramid
              schemes; (v) post notices, commercial or otherwise or (vi) violate the law or encourage others to violate the law. iii) Materials that encourage our users to "email for more details" are not permitted. Materials from any third party
              charging a fee are not permitted. iv) We are under no obligation to monitor the materials posted on the Projects by users, but we may monitor materials at random. Any materials we find in our discretion to violate our Terms of Use may
              be removed. b) Conduct Rules: i) You may not respond to postings by other users in any manner or for any purpose other than that which is expected. Communications that constitute advertising are prohibited. ii) You may not send (or
              encourage or help others to send) unsolicited commercial email to our users. iii) You may not delete or revise any material posted by any other person or entity, except as agreed among members collaborating on the same Project. iv) Any
              conduct by a user that in our sole discretion restricts or inhibits any other user from using or enjoying the Projects is prohibited. v) We are under no obligation to monitor the conduct of our users, but we may investigate and respond
              when violations are reported. Report inappropriate postings or conduct to [email protected] c) Security Rules: i) Users are prohibited from violating or attempting to violate the security of the Site, including, without limitation: (A)
              accessing data not intended for such user or logging into a server or account that the user is not authorized to access; (B) attempting to probe, scan or test the vulnerability of a system or network or to breach security or
              authentication measures without proper authorization; (C) attempting to interfere with service to any user, host or network, including, without limitation, via means of submitting a virus to the Projects, overloading, "flooding",
              "mailbombing" or "crashing"; (D) sending unsolicited email, including promotions and/or advertising of products or services; (E) forging any TCP/IP packet header or any part of the header information in any e-mail or Project posting.
              ii) Violation of these Security Rules may result in civil or criminal liability. We will investigate occurrences that may involve such violations and may involve, and cooperate with, law enforcement authorities in prosecuting users who
              are involved in such violations. d) Responsibility d) You agree that you are solely responsible for the content of any material you post to the Site and any consequences arising from such posting. Your use of the Site is a privilege. We
              assume no responsibility for materials posted by our users or any other actions, conduct or omissions of our users. We act as a service provider for users to distribute and publish their materials. We do not undertake responsibility for
              screening or monitoring our users’ materials. If we are notified by a user that any materials on the Site violate these Terms of Use, we may investigate and determine in good faith whether we agree with such allegation, in which case we
              may remove or request the removal of user materials. We are not required to make any such investigation or to remove any user materials, and we will not be liable to any user for taking or not taking such actions. We may at any time
              take any action with regard to user materials that we deem in our sole discretion to be necessary or appropriate. 3) Our Rights In Our Intellectual Property Reserved. a) Our Rights Except as expressly stated in these Terms of Use and
              except for Materials that members contribute to Projects, we reserve all our rights to all materials on the Site, including, without limitation, written content, graphical and design elements (including the Site’ “look and feel”), and
              service marks and trademarks. You may not sell, transfer or assign any products or services or your rights to any products or services provided by us to any third party without our express written authorization. You may not copy,
              modify, alter, or excerpt (or encourage or help others to copy, modify, alter, or excerpt) the Site materials. You may not use (or encourage or help others to use) the Site for any purpose or in any manner that is prohibited by these
              Terms of Use or by applicable law. You acknowledge and agree that these Terms of Use in no way convey any right, title or interest to you, or alter your right, title or interest, in any materials on the Site, including, without
              limitation, any statutory or common law copyright, patent or other intellectual property right in such materials. b) OWNERSHIP OF PAID WORK PRODUCT AND INTELLECTUAL PROPERTY Defined Terms: Gig: freelance work project Gig Provider (aka
              “Buyer”): the party which requests that a freelance gig be performed; the "payor." Freelancer: the party who performs the freelance gig work and who receives payment for satisfactory completion of such work; the "payee." Work Product:
              the work completed by the Freelancer on behalf of a Gig Provider. Upon Freelancer’s receipt of full payment from Gig Provider after completion of a Gig, the Work Product, including without limitation all Intellectual Property Rights in
              the Work Product, will be the sole and exclusive property of Gig Provider. If Freelancer has any Intellectual Property Rights to the Work Product that are not owned by Gig Provider upon Freelancer’s receipt of payment from Gig Provider,
              Freelancer hereby automatically irrevocably assigns to Gig Provider all right, title and interest worldwide in and to such Intellectual Property Rights. Except as set forth above, Freelancer retains no rights to use, and will not
              challenge the validity of Gig Provider’s ownership in, such Intellectual Property Rights. Freelancer hereby waives any moral rights, rights of paternity, integrity, disclosure and withdrawal or inalienable rights under applicable law in
              and to the Work Product. C) NONDISCLOSURE Nondisclosure and Nonuse Obligations: Freelancer agrees to not disclose any Confidential Information received from Customer about the Customer's Collaborizm Project other than to Vendor - who is
              also under an obligation to not disclose the Customer's Confidential (Project) Information. Exception: A disclosure of any Confidential Information by Vendor (a) in response to a valid order by acourt or other governmental body or (b)
              as otherwise required by law shall not be considered to be a breach of this Agreement or a waiver of confidentiality for other purposes; provided, however, that Vendor shall provide prompt prior written notice thereof to Company to
              enable Company to seek a protective order or otherwise prevent such disclosure. 4) Trade Secrets and Confidentiality. In some cases a Site member who initiates a Project (“Project Founder”) will designates at creation that access to a
              Project be restricted to invited members (a “Private Project”). a) You acknowledge that all Materials contributed by any Project Member to a Private Project are trade secrets owned by all the Project Members jointly. To the extent that
              any component of such Materials may not be deemed a trade secret under applicable law, such component shall be deemed nonetheless Confidential Info and subject to the confidentiality provisions of these Terms of Use. b) You must not
              disclose trade secrets or Confidential Info to any other person. You must also take all reasonable precautions to prevent any trade secrets or Confidential Info from being acquired or learned by any person who is not a Project Member in
              the applicable Private Project; this restrictions means that you may not copy, place or use any trade secret or Confidential Info in a way that might reasonably foreseeably lead to any person who is not a Project Member in the
              applicable Private Project learning or acquiring any of such trade secrets or Confidential Info. Each Project Member in a Private Project shall be a third-party beneficiary of the confidentiality provisions in this Section 4, which
              means that any Project Member in a Private Project may enforce such confidentiality obligations against any other Project Member in that Private Project, including by means of, but not limited to, a lawsuit c) Your obligation not to
              disclose shall continue until the earliest to occur of: i) Two years from the date that the Private Project was created by its Founding Member, ii) The written waiver by the Project Founder of the nondisclosure obligation of all Project
              Members, or iii) All the Project Members enter into an agreement among themselves that provides for different treatment of trade secrets and Confidential Info. 5) Disclaimer. a) We use commercially reasonable efforts to keep the Site
              available twenty-four hours a day, seven days a week, subject to scheduled downtime for maintenance purposes. We attempt to schedule downtime at times that minimize the impact to users. Due to causes outside of our control, including
              conditions on the Internet and the services of our and your Internet service providers, we can make no guarantees that any user will be able to access the Site at all times. We implement industry standard measures to protect against
              service failures, but we shall not be liable to you for inaccessibility to the Site due to causes outside of our control. b) We make no representations or warranties whatsoever regarding the Site and any materials on the Site.
              NOTWITHSTANDING ANYTHING TO THE CONTRARY IN THESE TERMS OF SERVICE OR ELSEWHERE, THE SITE IS PROVIDED ON AN “AS IS” BASIS. TO THE FULLEST EXTENT PERMITTED BY LAW, WE HEREBY DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, WITHOUT
              LIMITATION, ANY IMPLIED WARRANTY OF FITNESS FOR A PARTICULAR PURPOSE, ANY IMPLIED WARRANTY OF NON-INFRINGEMENT AND ANY IMPLIED WARRANTY OF MERCHANTABILITY. WE MAKE NO WARRANTY ABOUT THE ACCURACY, RELIABILITY, COMPLETENESS OR TIMELINESS
              OF THE SITE. WE MAKE NO WARRANTY THAT THE SITE’S SERVICE WILL BE UNINTERRUPTED, THE SITE’S FUNCTIONS SHALL BE ERROR-FREE OR, THAT THE SITE OR THE SERVERS THAT MAKE IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. c) Your
              use of the Site, the Internet, any materials you post or access via our Site and your conduct online or offline are at your own risk. d) The intellectual property rights of Project Members in Materials posted to a Project are not
              intended to be affected by these Terms of Use. We do not guaranty that you will receive, or be able to enforce, any intellectual property rights in any or all jurisdictions. We do not guaranty that your exercise of any rights does not
              infringe the rights of any other party. We shall not enforce, or participate in the enforcement of, any such rights against any parties, including our other Members. We also do not guaranty that Project Members will comply with the
              confidentiality provisions in these Terms of Use. We shall not enforce, or participate in the enforcement of, any rights to confidentiality against any parties, including our other Members. e) Nothing in these Terms of Use or placed on
              the Site by us shall be deemed legal, accounting, or securities advice. f) Under no circumstances will we be liable for any loss or damage caused by your reliance on information obtained through the Site. You are responsible to evaluate
              the accuracy, completeness or usefulness of any information, opinion, advice or other content available through the Site. Please seek the advice of professionals, as appropriate, regarding the evaluation of any specific information,
              opinion, advice or other content g) Further, we explicitly disclaim any responsibility for the accuracy, content or availability of information found on a site that links to or from the Site (a "third-party site"). We may offer links
              to, or incorporate into the Site, third-party sites that offer various products and/or services. We cannot ensure that users will be satisfied with any products or services that are purchased from such a third-party site, since such
              sites are owned and operated by independent retailers. We do not endorse any of such products or services, nor have we taken any steps to confirm the accuracy or reliability of any of the information contained in any third party sites.
              We do not make any representations or warranties as to the security of any information (including credit card and other personal information) users might be requested to give a thirdparty site. We strongly encourage users to make their
              own investigation of third-party sites before proceeding with any transaction with such third parties. h) We do not endorse, and nothing on the Site shall be deemed to be an endorsement, representation or warranty of, any third party,
              whether in relation to such third party’s products, services, websites, experience or background or otherwise. We do not make any representations or warranties with regard to any materials posted by our members. i) We shall not access
              or disclose the Materials posted to a Private Project, except to the extent necessary for us to enforce these Terms of Use or operate the Site, when required by law, or where we have a good-faith belief that such action is necessary to
              comply with a judicial proceeding, a court order or legal process served on us. We may also disclose such materials in cooperation with a law enforcement request. In any event, except for such enforcement and operation, we shall make no
              other use, and we shall insure that our personnel make no other use, of any Material posted to a Private Project. 6) Copyrights and Copyright Agent. We respect the intellectual property of others, and we ask you to do the same. If you
              are a copyright owner or an owner’s agent and find content on our website that infringes upon your copyrights, you may submit a notification to us under the Digital Millennium Copyright Act. To do so, please provide our Copyright Agent
              in writing the following information required by the Online Copyright Infringement Liability Limitation Act of the Digital Millennium Copyright Act, 17 U.S.C. §512. a) A physical or electronic signature of a person authorized to act on
              behalf of the owner of an exclusive right that is allegedly infringed. b) Identification of the copyright work claimed to have been infringed, or, if multiple copyrighted works at a single online site are covered by a single
              notification, a representative list of such works at that site. c) Identification of the material that is claimed to be infringing or to be the subject of infringing activity and that is to be removed or access to which is to be
              disabled, and information reasonably sufficient to permit us to locate the material. d) Information reasonably sufficient to permit us to contact you, such as an address, telephone number, and, if available, an electronic mail. e) A
              statement that the complaining party has a good-faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law. f) A statement that the information in the notification
              is accurate, and under penalty of perjury, that the complaining party is authorized to act on behalf of the owner of an exclusive right that is allegedly infringed. Our designated Copyright Agent for notice of claims of copyright
              infringement is: Michael H. Sproule, Esq.Akabas & Sproule Attorneys at Law 488 Madison Avenue, 11th FloorNew York, New York 10022(212) 308-8505 * www.akabas-sproule.com 7) Indemnification. You shall indemnify and defend us, and our
              officers, employees and consultants against any costs, expenses (including reasonable attorneys' fees whether arising out of a third-party claim or in enforcing this indemnification), claims, judgments, settlements and damages
              (including all damages awarded to third parties payable by us, but in all cases only our direct damages) arising out of, or related to, your use of the Site, any Materials posted by you to the Site or provided to other users by you,
              including, but not limited to, any claim that such Materials infringe the intellectual property rights of any person, or any violation of these Terms of Use. 8) Limitation of Liability. a) NEITHER WE, NOR ANY OF OUR OFFICERS, DIRECTORS,
              EMPLOYEES OR AGENTS, WILL BE LIABLE TO YOU OR TO ANY OTHER PERSON FOR ANY INDIRECT, CONSEQUENTIAL, PUNITIVE OR SPECIAL DAMAGES (“NONDIRECT DAMAGES”), OF ANY CHARACTER, WHETHER IN AN ACTION IN CONTRACT, TORT OR OTHERWISE, ARISING OUT OF
              OR IN CONNECTION WITH THESE TERMS OF USE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. b) THE LIABILITY OF US AND ANY OF OUR OFFICERS, DIRECTORS, EMPLOYEES OR AGENTS TO YOU OR TO ANY OTHER PERSON FOR DIRECT DAMAGES
              SHALL BE LIMITED TO THE GREATER OF US$100 OR THE FEES PAID BY YOU FOR OUR SERVICES DURING THE 12 MONTHS PRECEDING THE EVENTS THAT GIVE RISE TO YOUR FIRST CLAIM AGAINST US FOR DAMAGES. c) BECAUSE SOME STATES OR JURISDICTIONS DO NOT ALLOW
              THE EXCLUSION OR LIMITATION OF LIABILITY FOR NON-DIRECT DAMAGES, THE LIMITATIONS IN PARAGRAPH (A) ABOVE MAY NOT APPLY TO YOU, BUT IN SUCH CASE, THE LIMITATIONS IN PARAGRAPH (B) SHALL APPLY TO BOTH DIRECT AND NON-DIRECT DAMAGES. 9)
              Governing Law and Jurisdiction/Waiver of Jury Trial. These Terms of Use and any claim or dispute arising out of, relating to or in connection with these Terms of Use or the transactions contemplated hereby, whether in contract, tort or
              otherwise, shall be governed by and construed in accordance with the laws of the State of New York without giving effect to its conflicts of law principles. You and we irrevocably consent and agree that any legal action, suit or
              proceeding against either you or us arising out of, relating to or in connection with the Site and/or these Terms of Use may be brought only in United States District Court for the Southern District of New York, or if such court does
              not have jurisdiction, in the courts of the State of New York located in New York County and hereby irrevocably accepts and submits to the exclusive jurisdiction of the aforesaid courts in personam, with respect to any such action, suit
              or proceeding. EACH PARTY WAIVES TO THE FULLEST EXTENT PERMITTED BY LAW ANY RIGHT TO TRIAL BY JURY IN ANY ACTION, SUIT OR PROCEEDING BROUGHT TO ENFORCE, DEFEND OR INTERPRET ANY RIGHTS OR REMEDIES ARISING UNDER, RELATING TO OR IN
              CONNECTION WITH THESE TERMS OF USE. 10) Notices. You shall send notices to us by mail or by email to our contact information listed below and addressed to the attention of LEGAL. Notices to you will be sent by mail or by email to the
              addresses you provide when registering. Notices shall be deemed given on the day actually received by recipient, if received as provided in this paragraph before 5pm on a business day in the recipient’s location. Notices received after
              5pm or on a non-business day shall be deemed received on the next business day. 11) Amendment. We may change these Terms of Use, including the Privacy Policy, at any time. We will post notification of changes on the Site and e-mail them
              to registered users. Your continued use of the Site after the posting on the Site of any changes (whether or not you have also received notice by email) indicates your acceptance of such changes. 12) Savings Clause. In any jurisdiction
              where any of these Terms of Use cannot be enforced, including any rights in intellectual property, these Terms of Use shall be construed in such jurisdiction in all respects as if such unenforceable provision were omitted. Also in such
              jurisdiction there shall be added automatically as a part of these Terms of Use an enforceable provision that is as similar to such unenforceable provision as may be possible. 13) General. We and you are solely independent contractors
              of each other. Neither party shall be deemed in default for failure to comply with any provision hereof, if such failure results from acts or events beyond its reasonable control, other than payment of money. If any provision of these
              Terms of Use is found to be invalid, illegal or unenforceable, the validity, legality and enforceability of the remaining provisions shall not in any way be affected or impaired thereby. We are not obligated to enforce these Terms of
              Use, but no failure to enforce any of these Terms of Use, even if repeated and continuing for a prolonged period, shall constitute a waiver of any of these Terms of Use, which may be done only by a written agreement properly signed on
              our behalf. All provisions of these Terms of Use, except provisions that grant you access to or use of the Site, shall survive the termination of the agreement between us and you. These Terms of Use shall be binding upon the parties,
              their legal representatives, successors and permitted assigns, but may not be assigned by you. Except as may be expressly stated in any other written agreement between you and us, these Terms of Use, including the Privacy Policy, (as
              amended from time to time by us as provided in these Terms of Use) contain the entire understanding between you and us and supersede any prior agreement between you and us, whether written oral. 14) Effective Date. July 20th, 2013.
              Contact Us: hello@collaborizm.com
            </Text>
          </ScrollView>
        </InnerContainer>
      </OuterContainer>
    </Modal>
  );
};

export default T_CModal;
