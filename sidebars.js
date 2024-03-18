/**
 * Creating a sidebar enables you to:
- create an ordered group of docs
- render a sidebar for each doc of that group
- provide next/previous navigation

The sidebars can be generated from the filesystem, or explicitly defined here.

Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    // By default, Docusaurus generates a sidebar from the docs folder structure
    // tutorialSidebar: [{ type: 'autogenerated', dirName: '.' }],
    Environment_Sidebar: [
        {
            type: 'autogenerated',
            dirName: 'Environment'
        }
    ],
    CTF_Sidebar: [
        {
            type: 'autogenerated',
            dirName: 'CTF-Research'
        }
    ],
    Web_Sidebar: [
        {
            type: 'autogenerated',
            dirName: 'Web'
        }
    ],
    Penetration_Sidebar: [
        {
            type: 'autogenerated',
            dirName: 'Penetration'
        }
    ],
    Devops_Sidebar: [
        {
            type: 'autogenerated',
            dirName: 'Devops'
        }
    ],
    AttackDefense_Sidebar: [
        {
            type: 'autogenerated',
            dirName: 'Attack-Defense'
        }
    ],


    // But you can create a sidebar manually
    /*
    tutorialSidebar: [
        'intro',
        'hello',
        {
            type: 'category',
            label: 'Tutorial',
            items: ['tutorial-basics/create-a-document'],
        },
    ],
     */
};

module.exports = sidebars;