import { graphql } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import SEO from '../components/SEO';

const UsesBodyStyles = styled.div`
  margin-top: 2rem;
`;

export default function UsesPage({ data }) {
  return (
    <>
      <SEO
        title="Uses"
        description="I change my home office somewhat frequently, this is a living page
          that documents everything in my setup!"
      />
      <div className="center">
        <h1>Uses</h1>
        <p>
          I change my home office somewhat frequently, this is a living page
          that documents everything in my setup!
        </p>
        <Img fluid={data.office.childImageSharp.fluid} alt="Home office" />
      </div>
      <UsesBodyStyles className="article">
        <h2>Work Setup (Left)</h2>
        <ul>
          <li>
            <b>Laptop: </b>
            <a
              href="https://www.amazon.co.uk/Apple-MacBook-Retina-2-6GHz-6-Core/dp/B07FNVPPXB/ref=sr_1_4?dchild=1&keywords=macbook+pro+15+2019&qid=1609917731&quartzVehicle=93-1816&replacementKeywords=macbook+pro+2019&sr=8-4"
              target="_blank"
              rel="noreferrer"
            >
              i7 Macbook Pro (late) 2019
            </a>
            . Switched from windows in 2019 for dev and it's been a smooth
            process that I do not regret in the slightest!
          </li>
          <li>
            <b>Monitor:</b>{' '}
            <a
              href="https://www.benq.eu/en-uk/monitor/entertainment/ew3270u.html"
              target="_blank"
              rel="noreferrer"
            >
              32" BenQ 4k HDR monitor
            </a>
            , perfect size for working, a tiny bit too big for gaming
          </li>
          <li>
            <b>Mac Dock:</b>{' '}
            <a
              href="https://www.amazon.co.uk/Anker-MacBook-PowerExpand-Thunderbolt-Delivery-Gray/dp/B07YZ48HCT/ref=sr_1_5?dchild=1&keywords=Anker+mac+dock&qid=1609918316&sr=8-5"
              target="_blank"
              rel="noreferrer"
            >
              Anchor 7 in 2 mac dock
            </a>
            . Great little unit, can pass through power whilst powering the 4k
            monitor keyboard usb and my storage device.
          </li>
          <li>
            <b>Laptop Stand: </b>I cant find any brand markings on the stand but
            it's a cheap portable stand because its hidden anyway so doesn't
            need to look nice!
          </li>
          <li>
            <b>Keyboard:</b>{' '}
            <a
              href="https://www.amazon.co.uk/gp/product/B07W5JK5MW/ref=ppx_yo_dt_b_asin_title_o01_s00?ie=UTF8&psc=1"
              target="_blank"
              rel="noreferrer"
            >
              Logitech MX Keys for mac
            </a>{' '}
            along with the all important{' '}
            <a
              href="https://www.amazon.co.uk/gp/product/B07VWZHCNX/ref=ppx_yo_dt_b_asin_title_o01_s00?ie=UTF8&psc=1"
              target="_blank"
              rel="noreferrer"
            >
              Wrist support
            </a>
          </li>
          <li>
            <b>Mouse:</b>{' '}
            <a
              href="https://www.amazon.co.uk/Logitech-Rechargeable-Multi-Device-Programmable-Productivity/dp/B071KZS3MF/ref=sr_1_2?dchild=1&keywords=mx+master+2&qid=1609918045&s=computers&sr=1-2"
              target="_blank"
              rel="noreferrer"
            >
              Logitech MX Master 2s
            </a>{' '}
            wireless mouse, absolutely love this mouse for development, used it
            for years and probably only charged it 3/4 times.
          </li>
          <li>
            <b>Mouse Pad: </b>{' '}
            <a
              href="https://www.amazon.co.uk/gp/product/B01DIJIE1Q/ref=ppx_yo_dt_b_asin_title_o05_s00?ie=UTF8&psc=1"
              target="_blank"
              rel="noreferrer"
            >
              Logitech G440 Hard polymer Pad
            </a>
            . The MX Master mouse boasts it can track on any surface but I enjoy
            the feel of a hard mouse pad too much!
          </li>
          <li>
            <b>Audio:</b>{' '}
            <a
              href="https://www.amazon.co.uk/Apple-Airpods-Charging-latest-Model/dp/B07PZR3PVB/ref=sr_1_3?dchild=1&keywords=apple+airpods&qid=1609918231&sr=8-3"
              target="_blank"
              rel="noreferrer"
            >
              Apple Airpods
            </a>
            , I love these, specifically the non pro version because they are
            not ear buds, I can wear them all day during work and not get any
            earache!
          </li>
        </ul>

        <h2>Gaming Setup (Right)</h2>
        <ul>
          <li>
            <b>Gaming PC:</b> Soon to be upgraded to to a 3080 but currently its
            a 1080GPU, 16gb ram, i7 6800k build
          </li>
          <li>
            <b>Monitor: </b>Soon to be upgraded to a 2k monitor but currently a{' '}
            <a
              href="https://www.currys.co.uk/gbuk/gaming/pc-gaming/gaming-monitors/msi-optix-g271-full-hd-27-ips-lcd-gaming-monitor-black-10204314-pdt.html"
              target="_blank"
              rel="noreferrer"
            >
              MSI Optix G721 27" 144hz
            </a>
          </li>
          <li>
            <b>Keyboard: </b>
            <a
              href="https://www.amazon.co.uk/Logitech-Mechanical-Keyboard-Lightsync-Customizable/dp/B07W5JK9ND/ref=sr_1_2?crid=1191SZK410VPF&dchild=1&keywords=logitech+g513&qid=1609918919&sprefix=logitech+g5%2Caps%2C182&sr=8-2"
              target="_blank"
              rel="noreferrer"
            >
              Logitech G513 Tactile keyboard with wrist rest
            </a>
          </li>
          <li>
            <b>Mouse: </b>
            <a
              href="https://www.amazon.co.uk/Logitech-Lightweight-Programmable-Rechargeable-Ambidextrous/dp/B07SF1RCYF/ref=sr_1_1?dchild=1&keywords=logitech+g903&qid=1609918996&sr=8-1"
              target="_blank"
              rel="noreferrer"
            >
              Logitech G903
            </a>
          </li>
          <li>
            <b>Mouse Pad: </b>
            <a
              href="https://www.amazon.co.uk/gp/product/B01DIJIE1Q/ref=ppx_yo_dt_b_asin_title_o05_s00?ie=UTF8&psc=1"
              target="_blank"
              rel="noreferrer"
            >
              Logitech G440 Hard polymer Pad
            </a>
          </li>
          <li>
            <b>Audio: </b>
            <a
              href="https://steelseries.com/gaming-headsets/arctis-pro-wireless"
              target="_blank"
              rel="noreferrer"
            >
              Steelseries arctis wireless pro
            </a>
            . I love these but its my 3rd set due to faults through warranty
            replacements so I remain sceptical
          </li>
        </ul>

        <h2>Desk</h2>
        <ul>
          <li>
            <b>Desk:</b> The desk is actually a kitchen worktop cut down to fit
            the length of the room exactly. Its only vaneer so was much more
            inexpensive than getting a custom desk built to fit.{' '}
            <a
              href="https://www.diy.com/departments/goodhome-38mm-kala-matt-wood-effect-laminate-particle-board-square-edge-kitchen-worktop-l-3000mm/3663602636885_BQ.prd"
              target="_blank"
              rel="noreferrer"
            >
              B&Q Matt wood effect particle board
            </a>
          </li>
          <li>
            <b>Cable Management:</b> You can't see in the picture but the desk
            is floating with no visible cables, thanks to{' '}
            <a
              href="https://www.amazon.co.uk/gp/product/B083M5XCP7/ref=ppx_yo_dt_b_asin_title_o02_s00?ie=UTF8&psc=1"
              target="_blank"
              rel="noreferrer"
            >
              2 Under desk cable organizers
            </a>
          </li>
          <li>
            <b>Desk rear lighting:</b>{' '}
            <a
              href="https://www.diy.com/departments/colours-driggs-mains-powered-led-multicolour-strip-light-ip20-400lm-l-3m/3663602762751_BQ.prd"
              target="_blank"
              rel="noreferrer"
            >
              These lights
            </a>{' '}
            are inexpensive but not smart! For that reason you also need a{' '}
            <a
              href="https://www.amazon.co.uk/TCP-Smart-Compatible-Assistant-Required/dp/B07KXBQKXX"
              target="_blank"
              rel="noreferrer"
            >
              smart plug
            </a>{' '}
            if you want to hook it up to your google home/alexa devices
          </li>
          <li>
            <b>Wall lighting:</b> The absolute Pièce de résistance of the room
            lighting is the{' '}
            <a
              href="https://www.amazon.co.uk/Nanoleaf-Rhythm-Music-Syncing-Smarter/dp/B075DHJ6JW/ref=asc_df_B075DHJ6JW/?tag=googshopuk-21&linkCode=df0&hvadid=231971530794&hvpos=&hvnetw=g&hvrand=11903144312530110113&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9046659&hvtargid=pla-377251931431&psc=1&th=1&psc=1"
              target="_blank"
              rel="noreferrer"
            >
              30 Nanoleaf panels
            </a>
          </li>
        </ul>
      </UsesBodyStyles>
    </>
  );
}

export const query = graphql`
  query {
    office: file(relativePath: { eq: "office.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 928, maxHeight: 400) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;
